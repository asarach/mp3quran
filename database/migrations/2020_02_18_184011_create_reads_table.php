<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reads', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            
            $table->bigIncrements('id');

            $table->string('slug')->unique();
            $table->string('url', 120);
            $table->string('torrent', 191);
            $table->string('itunes', 191);
            $table->string('video', 191)->nullable();

            $table->text('title')->nullable();
            $table->text('description')->nullable();
            $table->text('keywords')->nullable();

            $table->boolean('status')->default(0);
            $table->boolean('featured')->default(0);
            $table->boolean('promoted')->default(0);

            $table->unsignedBigInteger('reciter_id')->nullable();
            $table->foreign('reciter_id')
                    ->references('id')
                    ->on('reciters')
                    ->onDelete('cascade');

            $table->unsignedBigInteger('rewaya_id')->nullable();
            $table->foreign('rewaya_id')
                    ->references('id')
                    ->on('rewayat')
                    ->onDelete('cascade');
					
			$table->unsignedBigInteger('mushaf_id')->nullable();
            $table->foreign('mushaf_id')
                    ->references('id')
                    ->on('mushafs')
                    ->onDelete('cascade');

			$table->unsignedBigInteger('server_id')->nullable();
            $table->foreign('server_id')
                    ->references('id')
                    ->on('servers')
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
        Schema::dropIfExists('reads');
    }
}
