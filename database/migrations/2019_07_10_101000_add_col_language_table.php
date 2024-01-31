<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColLanguageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('translator_languages', function (Blueprint $table) {
            $table->string('script', 60)->nullable();
            $table->string('native', 60)->nullable();
            $table->string('regional', 60)->nullable();
            $table->string('display')->nullable();
            $table->string('direction')->nullable();
            $table->boolean('status')->default(0);
            $table->string('name_english')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('translator_languages', function (Blueprint $table) {
            //
        });
    }
}
