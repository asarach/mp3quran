<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAudioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('audios', function (Blueprint $table) {
            dd('audios');
            $table->increments('id');
            $table->string('name');
            $table->string('file');
            $table->string('bitrate');

            $table->integer('aya_id')->unsigned();
            $table->foreign('aya_id')
                    ->references('id')->on('ayas')
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
        Schema::dropIfExists('audios');
    }
}
