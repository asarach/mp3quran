<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlaylistItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('playlist_items', function (Blueprint $table) {
            $table->id();

            $table->string('listable_id');
            $table->string('listable_type');

            $table->unsignedBigInteger('sora_id')->nullable();
            $table->foreign('sora_id')
                ->references('id')
                ->on('soar')
                ->onDelete('cascade');


            $table->unsignedBigInteger('playlist_id');
            $table->foreign('playlist_id')
                ->references('id')
                ->on('playlists')
                ->onDelete('cascade');

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
        Schema::dropIfExists('playlist_items');
    }
}
