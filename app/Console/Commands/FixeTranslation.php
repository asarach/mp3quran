<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DirectoryIterator;
use DB;
use Stichoza\GoogleTranslate\GoogleTranslate;


class FixeTranslation extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'translator:fix {--af}';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Command description';

  /**
   * Create a new command instance.
   *
   * @return void
   */
  public function __construct()
  {
    parent::__construct();
  }

  /**
   * Execute the console command.
   *
   * @return mixed
   */
  public function handle()
  {

    if ($this->option('af')) {
      $this->fixAdmin();
    }
    //dd('asa');

    $folders = [
      base_path('app'), //114
      base_path('resources/admin'), //638
      base_path('resources/js'), //638
      base_path('resources/js/lib'), //638
      base_path('resources/views'), //1179
    ];

    $trans = $this->getTrans($folders);
    $other_trans = $this->getOtherTrans($folders, []);
    foreach ($other_trans as $other_tran) {
      $trans[] =  $other_tran;
    }

    $this->deleteNonNeededTrans($trans);

    $languages = DB::table('translator_languages')->get();
    foreach ($languages as $language) {
      $this->addNeededTrans($trans, $language->locale);
      $this->info('Locale ' . $language->locale . " => Added");
    }
  }
  public function getTrans($folders)
  {
    $trans = [];
    foreach ($folders as $folder) {
      $dir = $folder;
      foreach (glob("$dir/*") as $file) {
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        if (in_array($ext, ['php', 'vue', 'js'])) {
          $content = file_get_contents("$file");
          preg_match_all('/trans\(["\'][a-zA-Z0-9_.-]+["\']/', $content, $matches, 0);
          try {
            foreach ($matches[0] as $matche) {
              $item = [];
              if (strpos($matche, 'trans("') !== false) {
                $exp = explode('"', $matche);
              } else {
                $exp = explode("'", $matche);
              }


              $exp2 = explode(".", $exp[1]);
              $item['group'] = $exp2[0];
              $item['item'] = $exp2[1];
              if (!empty($item['item'])) {
                $trans[] = $item;
              }
            }
          } catch (\Exception $e) {
          }
        } else {
          $trans = array_merge($trans, $this->getTrans([$file]));
        }
      }
    }



    return $trans;
  }

  public function deleteNonNeededTrans($trans)
  {
    $translations = DB::table('translator_translations')->whereIn('group', ['admin', 'front', 'text'])->get();
    $collection = collect($trans);
    foreach ($translations as $translation) {
      if (!$collection->contains(["group" => $translation->group, "item" => $translation->item])) {
        DB::table('translator_translations')->where('id', $translation->id)->delete();
        $this->info($translation->group . '.' . $translation->item . " => Deleted");
      }
    }
  }
  public function addNeededTrans($trans, $language)
  {
    foreach ($trans as $tran) {
      $endWithDahs = $this->endWithDahs($tran['item']);
      $translation = DB::table('translator_translations')->where('group', $tran['group'])->where('item', $tran['item'])->where('locale', $language)->first();
      if (is_null($translation) && !$endWithDahs) {
        $text =  str_replace('-', ' ', $tran['item']);
        /*
                if ($tran['group'] == 'menu') {
                  $text =  $this->translate(config('app.locale'), $language, $text);
                }else{
                  $text =  $this->translate('en', $language, $text);
                }
                */
        DB::table('translator_translations')->insert(['group' => $tran['group'], 'item' => $tran['item'], 'text' => $text, 'locale' => $language]);
        $this->info($tran['group'] . '.' . $tran['item'] . " => Added");
      }
    }
  }
  public static function translate($base_locale, $locale, $text)
  {
    preg_match_all("/([\s|\:])\:([^\s|^:])+/", $text, $matches);
    foreach ($matches[0] as $match) {
      $text = str_replace($match, str_replace(":", "PIKACHU", $match), $text);
    }

    try {
      $tr = new GoogleTranslate();
      $tr->setSource($base_locale);
      $tr->setTarget($locale);
      $translated = $tr->translate($text);
    } catch (\Exception $e) {
      $translated = $text;
    }

    return str_replace("PIKACHU", ":", $translated);
  }
  public static function endWithDahs($text)
  {
    $length = strlen($text);
    if ($length == 0) {
      return false;
    }

    return (substr($text, -1) === '_');
  }

  public function fixAdmin()
  {

    $text_trans   = $this->getTrans([base_path('resources/js/components')]);
    $admin_trans  = $this->getTrans([base_path('resources/js/admin/components')]);
    $front_trans  = $this->getTrans([base_path('resources/views')]);


    // search in front for text and replace

    $this->info('fixing front trans');
    //dd($front_trans);
    foreach ($front_trans as $front_tran) {
      if (!is_null(collect($text_trans)->where('item', $front_tran['item'])->first())) {
        $this->replaceContent(base_path('resources/views'), $front_tran, 'text');
      }
    }

    $this->info('fixing front trans');

    foreach ($admin_trans as $admin_tran) {
      if (!is_null(collect($text_trans)->where('item', $admin_tran['item'])->first())) {
        $this->replaceContent(base_path('resources/js/admin/components'), $admin_tran, 'text');
      }
    }

    $this->info('fixing admin trans');

    foreach ($admin_trans as $admin_tran) {
      if (!is_null(collect($front_trans)->where('item', $admin_tran['item'])->first())) {
        $this->replaceContent(base_path('resources/js/admin/components'), $admin_tran, 'front');
      }
    }


    // search in admin for text or front  and replace

  }
  public function replaceContent($dir, $tran, $text)
  {
    foreach (glob("$dir/*") as $file) {
      $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
      if (in_array($ext, ['php', 'vue', 'js'])) {
        $content = file_get_contents("$file");
        $content = str_replace("trans('" . $tran['group'] . "." . $tran['item'], "trans('" . $text . "." . $tran['item'], $content);
        $file_handle = fopen("$file", 'w');
        fwrite($file_handle, $content);
        fclose($file_handle);
      } else {
        $this->replaceContent($file, $tran, $text);
      }
    }
  }

  public function getOtherTrans($folders, $other_trans)
  {
    foreach ($folders as $folder) {
      $dir = $folder;
      foreach (glob("$dir/*") as $file) {
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        if (in_array($ext, ['php', 'vue', 'js'])) {
          $content = file_get_contents("$file");
          foreach ($this->other_translations as  $other_translation) {
            if (strpos($content, $other_translation['item']) !== false) {
              $other_trans[$other_translation['group'] . '.' . $other_translation['item']] = $other_translation;
            }
          }
          $content = null;
        } else {
          $other_trans = array_merge($other_trans, $this->getOtherTrans([$file], $other_trans));
        }
      }
    }


    return $other_trans;
  }

  protected $other_translations = [
    ['group' => 'text', 'item' => 'app-type-1'],
    ['group' => 'text', 'item' => 'app-type-2'],
    ['group' => 'text', 'item' => 'placement-header'],
    ['group' => 'text', 'item' => 'menu-desktop'],
    ['group' => 'text', 'item' => 'menu-mobile'],
    ['group' => 'text', 'item' => 'error'],
    ['group' => 'text', 'item' => 'error-copying-text'],
    ['group' => 'text', 'item' => 'copied'],
    ['group' => 'text', 'item' => 'text-copied'],
    ['group' => 'text', 'item' => 'added'],
    ['group' => 'text', 'item' => 'removed'],
    ['group' => 'text', 'item' => 'video-added-favorites'],
    ['group' => 'text', 'item' => 'video-removed-favorites'],
    ['group' => 'text', 'item' => 'radio-added-favorites'],
    ['group' => 'text', 'item' => 'radio-removed-favorites'],
    ['group' => 'text', 'item' => 'read-added-favorites'],
    ['group' => 'text', 'item' => 'read-removed-favorites'],
    ['group' => 'text', 'item' => 'sora-added-favorites'],
    ['group' => 'text', 'item' => 'sora-removed-favorites'],
    ['group' => 'text', 'item' => 'item-added-playlist'],
    ['group' => 'text', 'item' => 'select-rewaya'],
    ['group' => 'text', 'item' => 'islam-on-telegram'],
    ['group' => 'text', 'item' => 'hisn-muslim'],
    ['group' => 'text', 'item' => 'haramain'],


    ['group' => 'admin', 'item' => 'order-by-order_num-desc'],
    ['group' => 'admin', 'item' => 'order-by-order_num-asc'],
    ['group' => 'admin', 'item' => 'order-by-name-desc'],
    ['group' => 'admin', 'item' => 'order-by-name-asc'],
    ['group' => 'admin', 'item' => 'order-by-newest'],
    ['group' => 'admin', 'item' => 'order-by-oldest'],
    ['group' => 'admin', 'item' => 'order-by-title-desc'],
    ['group' => 'admin', 'item' => 'order-by-title-asc'],
    ['group' => 'admin', 'item' => 'order-by-new_url-desc'],
    ['group' => 'admin', 'item' => 'order-by-new_url-asc'],
    ['group' => 'admin', 'item' => 'order-by-old_url-desc'],
    ['group' => 'admin', 'item' => 'order-by-old_url-asc'],
    ['group' => 'admin', 'item' => 'order-by-rewaya-desc'],
    ['group' => 'admin', 'item' => 'order-by-rewaya-asc'],
    ['group' => 'admin', 'item' => 'order-by-reciter-desc'],
    ['group' => 'admin', 'item' => 'order-by-reciter-asc'],
    ['group' => 'admin', 'item' => 'order-by-mushaf-desc'],
    ['group' => 'admin', 'item' => 'order-by-mushaf-asc'],
    ['group' => 'admin', 'item' => 'order-by-ayat_count-desc'],
    ['group' => 'admin', 'item' => 'order-by-ayat_count-asc'],


    ['group' => 'seo', 'item' => 'read-title'],
    ['group' => 'seo', 'item' => 'read-description'],
  ];
}
