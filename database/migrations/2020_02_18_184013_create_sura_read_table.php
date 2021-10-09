<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSuraReadTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sura_read', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->string('duration', 20)->nullable();
            $table->string('filename', 20)->nullable();
            $table->unsignedBigInteger('sura_id');
            $table->foreign('sura_id')
                    ->references('id')
                    ->on('soar')
                    ->onDelete('cascade');

            $table->unsignedBigInteger('read_id');
            $table->foreign('read_id')
                    ->references('id')
                    ->on('reads')
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
        Schema::dropIfExists('sura_read');
    }
}
