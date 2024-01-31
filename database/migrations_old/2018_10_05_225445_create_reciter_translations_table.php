<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReciterTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reciter_translations', function (Blueprint $table) {
            $table->increments('id');
            
            $table->text('text');
            
            $table->integer('reciter_id')->unsigned();
            $table->foreign('reciter_id')
                    ->references('id')->on('reciters')
                    ->onDelete('cascade');
            
            $table->integer('language_id')->unsigned();
            $table->foreign('language_id')
                    ->references('id')->on('languages')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reciter_translations');
    }
}
