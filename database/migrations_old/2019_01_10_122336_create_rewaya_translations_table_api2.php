<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRewayaTranslationsTableApi2 extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::connection('mysql_b')->create('rewaya_translations', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name', 100);

            $table->integer('rewaya_id')->unsigned();
            $table->foreign('rewaya_id')
                    ->references('id')
                    ->on('rewayat')
                    ->onDelete('cascade');

            $table->integer('language_id')->unsigned();
            $table->foreign('language_id')
                    ->references('id')
                    ->on('languages')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::connection('mysql_b')->dropIfExists('rewaya_translations');
    }

}
