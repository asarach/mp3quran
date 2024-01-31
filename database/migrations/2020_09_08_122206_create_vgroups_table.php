<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVgroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vgroups', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');

            $table->string('name', 100);
            $table->string('slug')->unique();
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
        Schema::dropIfExists('vgroups');
    }
}
