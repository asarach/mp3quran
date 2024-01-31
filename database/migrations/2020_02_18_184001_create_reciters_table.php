<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecitersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reciters', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            
            $table->string('name');
            $table->text('about')->nullable();	
            $table->boolean('status')->default(0);

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
        Schema::dropIfExists('reciters');
    }
}
