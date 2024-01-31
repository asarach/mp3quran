<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTorrentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('torrents', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name', 191);
            $table->string('url', 191);
            $table->string('added', 191)->nullable();
            $table->integer('comments')->default(0);
            $table->integer('size')->default(0);
            $table->integer('seeders')->default(0);
            $table->integer('leechers')->default(0);
            $table->integer('completed')->default(0);

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
        Schema::dropIfExists('torrents');
    }
}
