<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImoAlbumTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imo_albums', function (Blueprint $table) {
            $table->id('album_id');
            $table->string('album_cover');
            $table->string('album_title')->nullable();
            $table->text('album_desc')->nullable();
            $table->string('album_lang')->nullable();
            $table->string('album_type')->nullable();
            $table->string('album_label')->nullable();
            $table->string('album_nature')->nullable();
            $table->integer('album_duration')->nullable();
            $table->decimal('album_score', 2, 1)->nullable();
            $table->bigInteger('album_time')->nullable();
            $table->string('author_name')->nullable();
            $table->string('author_avatar')->nullable();
            $table->text('author_desc')->nullable();
            $table->string('author_level')->nullable();
            $table->string('item_type')->nullable();
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
        Schema::dropIfExists('imo_albums');
    }
}