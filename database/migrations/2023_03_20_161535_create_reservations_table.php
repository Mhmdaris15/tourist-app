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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')->constrained('employees');
            $table->foreignId('travel_package_id')->constrained('travel_packages');
            $table->date('date_of_reservation');
            $table->integer('price');
            $table->integer('number_of_people');
            $table->decimal('discount', $precision = 10, $scale = 0);
            $table->float('discount_value');
            $table->float('total_price');
            $table->text('proof_of_payment');
            $table->enum('status', ['inorder', 'paid', 'finished']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
