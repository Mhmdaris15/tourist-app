<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('travel', function (Blueprint $table) {
            $table->id();
            $table->string('travel_title', 255);
            $table->text('travel_description');
            $table->foreignId('travel_category_id')->constrained('travel_categories');
            $table->text('facilities');
            $table->string('image_1', 255);
            $table->string('image_2', 255);
            $table->string('image_3', 255);
            $table->string('image_4', 255);
            $table->string('image_5', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('travel');
    }
};
