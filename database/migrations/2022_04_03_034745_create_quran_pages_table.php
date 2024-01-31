<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuranPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quran_pages', function (Blueprint $table) {
            $table->id();

            $table->decimal('x', 12, 2);
            $table->decimal('y', 12, 2);
            $table->integer('ayah');

            $table->unsignedBigInteger('sura_id');
            $table->foreign('sura_id')
                ->references('id')
                ->on('soar')
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
        Schema::dropIfExists('quran_pages');
    }
}
