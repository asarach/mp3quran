<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRadiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('radios', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            
            $table->bigIncrements('id');

            $table->string('name', 120);
            $table->string('slug')->unique();
            $table->string('url', 1500);
            $table->string('mmsurl')->nullable();
            $table->boolean('status')->default(1);

            $table->unsignedBigInteger('read_id')->nullable();
            $table->foreign('read_id')
                    ->references('id')
                    ->on('reads')
                    ->onDelete('cascade');
            

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
        Schema::dropIfExists('radios');
    }
}
