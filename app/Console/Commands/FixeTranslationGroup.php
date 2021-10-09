<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DirectoryIterator;
use DB;
use Stichoza\GoogleTranslate\GoogleTranslate;
use Waavi\Translation\Models\Translation;

class FixeTranslationGroup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'translator:fixgroup';

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
        $translations = Translation::whereIn('group', ['video', 'tv', 'sora', 'rewaya', 'reciter', 'read', 'radio', 'page', 'mushaf', 'app'])->get();
        $bar = $this->output->createProgressBar($translations->count());

        foreach ($translations as $translation) {
            $item = explode('-', $translation->item);
            
            if (isset($item[1]) and $item[0] != 'meta') {
                $translation->group = $translation->group . '-' . $item[0];
                $translation->item = $item[1];
                $translation->save();
            }
            

            $bar->advance();
            
        }
        $bar->finish();
    }
}
