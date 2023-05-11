<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSpecialRewayaReadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reads', function (Blueprint $table) {
            $table->unsignedBigInteger('special_rewaya_id')->nullable();
            $table->foreign('special_rewaya_id')
                    ->references('id')
                    ->on('special_rewayat')
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
        Schema::table('reads', function (Blueprint $table) {
            //
        });
    }
}
