<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DirectoryIterator;
use DB;
use Stichoza\GoogleTranslate\GoogleTranslate;

class FixeTranslationC extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'translator:fixc';

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
        $translations = DB::table('translator_translations')->where('id', '>', '106644')->get();

        foreach ($translations as $translation) {
            $current = DB::table('translator_translations_old')
                ->where('locale', $translation->locale)
                ->where('group', $translation->group)
                ->where('item', $translation->item)
                ->first();

            if ($current) {
                DB::table('translator_translations')
                    ->where('locale', $translation->locale)
                    ->where('group', $translation->group)
                    ->where('item', $translation->item)
                    ->update(['text' => $current->text]);
            }
        }
    }
}
