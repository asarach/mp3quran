<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewslettersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('newsletters', function (Blueprint $table) {
            $table->increments('id');
            $table->string("name", 50);
            $table->string("description", 250)->nullable();
            $table->boolean("status")->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
        
        Schema::create('nl_templates', function (Blueprint $table) {
            $table->increments('id');
            $table->string("name", 50);
            $table->tinyInteger("columns");
            $table->text("body", 255);
            $table->timestamps();
            $table->softDeletes();
        });

        
        Schema::create('nl_subscribers', function (Blueprint $table) {
            $table->increments('id');
            $table->string("name", 50)->nullable();
            $table->string("email", 50);
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('nl_subscriptions', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger("subscriber_id")->nullable();
            $table->foreign("subscriber_id")
                ->references("id")
                ->on("nl_subscribers")
                ->onDelete("cascade");

            $table->unsignedInteger("newsletter_id")->nullable();
            $table->foreign("newsletter_id")
                ->references("id")
                ->on("newsletters")
                ->onDelete("cascade");

            $table->timestamps();
        });
        Schema::create('nl_messages', function (Blueprint $table) {
            $table->increments('id');
            $table->string("subject", 255);
            $table->text("leftcol")->nullable();
            $table->text("rightcol")->nullable();

            $table->unsignedInteger("template_id")->nullable();
            $table->foreign("template_id")
                ->references("id")
                ->on("nl_templates")
                ->onDelete("cascade");


            $table->timestamps();
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
        Schema::dropIfExists('newsletters');
        Schema::dropIfExists('nl_templates');
        Schema::dropIfExists('nl_subscribers');
        Schema::dropIfExists('nl_messages');

    }
}

