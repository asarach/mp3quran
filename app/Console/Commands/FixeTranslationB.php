<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DirectoryIterator;
use DB;
use Stichoza\GoogleTranslate\GoogleTranslate;

class FixeTranslationB extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'translator:fixb';

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
        $translations = DB::table('translator_translations')->where('locale', 'eng')->where('group', 'admin')->get();
        //dd($translations);
        
        $languages = DB::table('translator_languages')->whereNotIn('locale', ['eng', 'ar', 'fr', 'ru', 'de', 'es', 'tr', 'cn', 'th'])->get();
        foreach ($languages as $language) {
            $bar = $this->output->createProgressBar($translations->count());
            foreach ($translations as $translation) {
                $current = DB::table('translator_translations')
                                ->where('locale', $language->locale)
                                ->where('group', $translation->group)
                                ->where('item', $translation->item)
                                ->first()->text;
                //if ($translation->text == $current) {
                    //$text = $this->translate('ar', 'en', $translation->text);
                    $text = $this->translate('en', $language->locale, $translation->text);
                    DB::table('translator_translations')
                            ->where('locale', $language->locale)
                            ->where('group', $translation->group)
                            ->where('item', $translation->item)
                            ->update(['text' => $text]);
                    //dd( $affected);
                //}
            
                $bar->advance();
            }
            $bar->finish();
            $this->info('Locale ' . $language->locale . " => Added");
        }
    }
    public static function translate($base_locale, $locale, $text)
    {
        preg_match_all("/([\s|\:])\:([^\s|^:])+/", $text, $matches);
        foreach ($matches[0] as $match) {
            $text = str_replace($match, str_replace(":", "PIKACHU", $match), $text);
        }

        //try {
        $tr = new GoogleTranslate();
        $tr->setSource($base_locale);
        $tr->setTarget($locale);
        $translated = $tr->translate($text);
        /*} catch (\Exception $e) {
          $translated = $text;
        }*/

        return str_replace("PIKACHU", ":", $translated);
    }
}
