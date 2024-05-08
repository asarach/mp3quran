<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsTafsirsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tafsirs', function (Blueprint $table) {
            $table->string('url')->nullable();
            $table->enum('type', ['quran', 'podcast'])->default('podcast');
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
            $table->dropColumn('url');
        $table->dropColumn('type');
        });
    }
}
