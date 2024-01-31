<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReportSoraTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('report_sora', function (Blueprint $table) {
            $table->id();
            $table->string('note')->nullable();
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
        Schema::dropIfExists('report_sora');
    }
}
