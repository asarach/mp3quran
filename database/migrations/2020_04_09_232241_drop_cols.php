<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DropCols extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasColumn('mushafs', 'description')) {
            Schema::table('mushafs', function (Blueprint $table) {
                $table->dropColumn('description');
            });
        }
        if (Schema::hasColumn('mushafs', 'keywords')) {
            Schema::table('mushafs', function (Blueprint $table) {
                $table->dropColumn('keywords');
            });
        }
        if (Schema::hasColumn('radios', 'description')) {
            Schema::table('radios', function (Blueprint $table) {
                $table->dropColumn('description');
            });
        }
        if (Schema::hasColumn('radios', 'keywords')) {
            Schema::table('radios', function (Blueprint $table) {
                $table->dropColumn('keywords');
            });
        }
        if (Schema::hasColumn('rewayat', 'description')) {
            Schema::table('rewayat', function (Blueprint $table) {
                $table->dropColumn('description');
            });
        }
        if (Schema::hasColumn('rewayat', 'keywords')) {
            Schema::table('rewayat', function (Blueprint $table) {
                $table->dropColumn('keywords');
            });
        }
        if (Schema::hasColumn('tvs', 'description')) {
            Schema::table('tvs', function (Blueprint $table) {
                $table->dropColumn('description');
            });
        }
        if (Schema::hasColumn('tvs', 'keywords')) {
            Schema::table('tvs', function (Blueprint $table) {
                $table->dropColumn('keywords');
            });
        }
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
