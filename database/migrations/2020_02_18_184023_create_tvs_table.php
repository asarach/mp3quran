<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTvsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tvs', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            
            $table->bigIncrements('id');

            $table->string('name', 120);
            $table->string('slug')->nullable();
            $table->boolean('status')->default(1);
            $table->string('url', 1500);

            $table->text('description')->nullable();
            $table->text('keywords')->nullable();
            
            $table->softDeletes();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tvs');
    }
}
