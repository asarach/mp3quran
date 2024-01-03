<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImoItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imo_items', function (Blueprint $table) {
            $table->id('item_id');
            $table->integer('item_index');
            $table->string('item_title');
            $table->string('item_lang')->nullable();
            $table->text('item_desc')->nullable();
            $table->integer('item_duration')->nullable();
            $table->bigInteger('item_time')->nullable();
            $table->string('item_url');

            $table->unsignedBigInteger('album_id')->nullable();
            $table->foreign('album_id')
                    ->references('album_id')
                    ->on('imo_albums');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('imo_items');
    }
}
