<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("menus", function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->bigIncrements("id");

            $table->string("title", "190");
            $table->string("slug", "190");
            $table->string("icon", "190");
            $table->string("place", "30");
            $table->text("languages");
            $table->string('order_num')->default(0);
            $table->boolean("status")->nullable()->default(0);
            
            
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
        Schema::dropIfExists("menus");
    }
}
        