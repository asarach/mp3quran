<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMediasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medias', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->bigIncrements('id');
            $table->string('title')->nullable();
            $table->string('uri')->nullable();
            $table->boolean('status')->default(0);
            $table->string('type')->nullable();
            $table->timestamps();
        });
        Schema::create('mediable', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            
            $table->unsignedBigInteger('media_id')->nullable();
            $table->foreign('media_id')->references('id')->on('medias')->onDelete('cascade');
            $table->bigInteger('mediable_id');
            $table->string('mediable_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medias');
    }
}
