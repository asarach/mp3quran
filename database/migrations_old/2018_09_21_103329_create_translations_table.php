<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTranslationsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('translations', function (Blueprint $table) {
            $table->increments('id');

            $table->string('item', 150);
            $table->text('text');

            $table->string('locale', 10);
            $table->foreign('locale')->references('locale')->on('languages');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('translations');
    }

}
