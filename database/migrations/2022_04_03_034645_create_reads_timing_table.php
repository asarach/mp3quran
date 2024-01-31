<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReadsTimingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reads_timing', function (Blueprint $table) {
            $table->id();

            $table->integer('start_time');
            $table->integer('end_time');
            $table->integer('ayah');

            $table->unsignedBigInteger('read_id');
            $table->foreign('read_id')
                ->references('id')
                ->on('reads')
                ->onDelete('cascade');

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
        Schema::dropIfExists('reads_timing');
    }
}
