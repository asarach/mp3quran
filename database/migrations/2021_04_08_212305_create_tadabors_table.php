<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTadaborsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tadabors', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('title');
            $table->string('audio_url')->nullable();
            $table->string('image_url')->nullable();
            $table->text('text')->nullable();
            $table->boolean('status')->default(1);

            $table->unsignedBigInteger('sura_id')->nullable();
            $table->foreign('sura_id')
                ->references('id')
                ->on('soar')
                ->onDelete('cascade');

            $table->unsignedBigInteger('reciter_id')->nullable();
            $table->foreign('reciter_id')
                ->references('id')
                ->on('reciters')
                ->onDelete('cascade');

            $table->unsignedBigInteger('rewaya_id')->nullable();
            $table->foreign('rewaya_id')
                ->references('id')
                ->on('rewayat')
                ->onDelete('cascade');


            $table->softDeletes();
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
        Schema::dropIfExists('tadabors');
    }
}
