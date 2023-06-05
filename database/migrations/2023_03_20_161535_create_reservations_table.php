<?php

use App\Models\Customer;
use App\Models\TravelPackage;
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
            $table->date('date_of_reservation');
            $table->integer('price');
            $table->integer('number_of_people');
            $table->decimal('discount', $precision = 10, $scale = 0);
            $table->float('discount_value');
            $table->float('total_price');
            $table->string('proof_of_payment');
            $table->enum('status', ['Pending', 'Approved', 'Rejected']);
            $table->foreignIdFor(TravelPackage::class, 'travel_package_id');
            $table->foreignIdFor(Customer::class, 'customer_id');
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