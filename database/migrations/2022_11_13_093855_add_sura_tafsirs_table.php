<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSuraTafsirsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tafsirs', function (Blueprint $table) {
            $table->unsignedBigInteger('sura_id')->nullable();
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
        Schema::table('tafsirs', function (Blueprint $table) {
            //
        });
    }
}
