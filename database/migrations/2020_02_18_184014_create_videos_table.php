<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('url')->nullable();
            $table->boolean('status')->default(1);
            $table->boolean('featured')->default(0);

            $table->text('description')->nullable();
            $table->text('keywords')->nullable();

            $table->unsignedBigInteger('reciter_id');
            $table->foreign('reciter_id')
                    ->references('id')->on('reciters')
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
        Schema::dropIfExists('videos');
    }
}
