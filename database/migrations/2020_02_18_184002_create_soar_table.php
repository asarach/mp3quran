<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSoarTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('soar', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');

            $table->string('name', 100);
            $table->string('slug')->unique();
            $table->integer('start_page');
            $table->integer('end_page');
            $table->integer('ayat_count')->nullable();
            $table->integer('num')->nullable();
            $table->boolean('makkia')->default(0);
            $table->boolean('status')->default(0);
            
            
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('soar');
    }
}
