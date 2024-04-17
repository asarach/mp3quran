<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTorrentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('torrent', function (Blueprint $table) {
            $table->id();
            $table->string('filename');
            $table->string('info_hash');
            $table->string('url');
            $table->text('comment')->nullable();
            $table->date('date');
            $table->bigInteger('size');
            $table->string('category');
            $table->unsignedBigInteger('reciter_id')->nullable();
            $table->timestamps();

            $table->foreign('reciter_id')->references('id')->on('reciters');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('torrent');
    }
}
