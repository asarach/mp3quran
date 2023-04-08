<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuraTwentyReadTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sura_twenty_read', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->string('duration', 20)->nullable();
            $table->string('filename', 20)->nullable();
            $table->integer('report')->default(0);
            $table->unsignedBigInteger('sura_id');
            $table->foreign('sura_id')
                    ->references('id')
                    ->on('soar')
                    ->onDelete('cascade');

            $table->unsignedBigInteger('twenty_read_id');
            $table->foreign('twenty_read_id')
                    ->references('id')
                    ->on('twenty_reads')
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
        Schema::dropIfExists('sura_twenty_read');
    }
}
