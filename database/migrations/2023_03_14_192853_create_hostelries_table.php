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
        Schema::create('hostelries', function (Blueprint $table) {
            $table->id();
            $table->string('hostelry_title', 255);
            $table->text('hostelry_description');
            $table->text('facilites');
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
        Schema::dropIfExists('hostelries');
    }
};
