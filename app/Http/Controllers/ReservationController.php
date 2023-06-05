<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\TravelPackage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReservationController extends Controller
{
    public function index(){
        $reservations = Reservation::all();
        // get travel packages id and names
        $travel_packages = TravelPackage::all();
        return Inertia::render('Dashboard', [
            'reservations' => $reservations,
            'page' => 'reservation',
            'travel_packages' => $travel_packages
        ]);
    }

    public function store(Request $request){
        $reservation = $request->validate([
            'customer_id' => 'required|integer',
            'travel_package_id' => 'required|integer',
            'date_of_reservation' => 'required|date',
            'price' => 'required|integer',
            'number_of_people' => 'required|integer',
            'discount' => 'required|integer',
            'discount_value' => 'required|integer',
            'total_price' => 'required|integer',
            'status' => 'required',
        ]);

        if($request->has('proof_of_payment')){
            $request->validate([
                'proof_of_payment' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048'
            ]);
            $reservation['proof_of_payment'] = $request->file('proof_of_payment')->store('proof_of_payment');
        }

        Reservation::create($reservation);
        return redirect()->route('dashboard.reservation.index')->with('success', 'Reservation created successfully');
    }

    public function update(Request $request, $id){
        $reservation = Reservation::find($id);
        $data = $request->validate([
            'customer_id' => 'required|integer',
            'travel_package_id' => 'required|integer',
            'date_of_reservation' => 'required|date',
            'price' => 'required|integer',
            'number_of_people' => 'required|integer',
            'discount' => 'required|integer',
            'discount_value' => 'required|integer',
            'total_price' => 'required|integer',
            'status' => 'required',
        ]);

        $reservation->update($data);
        return redirect()->route('dashboard.reservation.index')->with('success', 'Reservation updated successfully');
    }

    public function destroy($id){
        $reservation = Reservation::find($id);
        $reservation->delete();
        return redirect()->route('dashboard.reservation.index')->with('success', 'Reservation deleted successfully');
    }
}