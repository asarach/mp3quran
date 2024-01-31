<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddRewayaRadiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasColumn('radios', 'mmsurl')) {
            Schema::table('radios', function (Blueprint $table) {
                $table->dropColumn('mmsurl');
            });
        }

        Schema::table('radios', function (Blueprint $table) {
           
            $table->unsignedBigInteger('rewaya_id')->nullable();
            $table->foreign('rewaya_id')
                    ->references('id')
                    ->on('rewayat')
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
        Schema::table('rewayat', function (Blueprint $table) {
            //
        });
    }
}
