<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddReciterIdAudioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('audios', function (Blueprint $table) {
            $table->dropColumn('name');
            
            $table->integer('reciter_id')->unsigned();
            $table->foreign('reciter_id')
                    ->references('id')->on('reciters')
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
        Schema::table('audio', function (Blueprint $table) {
            //
        });
    }
}
