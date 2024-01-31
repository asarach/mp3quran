<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpecialRewayatTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('special_rewayat', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            
            $table->bigIncrements('id');
            $table->string('name', 100);
            $table->string('slug')->unique();
            $table->boolean('status')->default(0);
            $table->string('folder')->nullable();

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
        Schema::dropIfExists('special_rewayat');
    }
}
