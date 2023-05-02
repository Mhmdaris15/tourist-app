<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index(){
        $customers = Customer::all();
        $users = User::where('role', 'customer')->get();
        return Inertia::render('Dashboard', [
            'customers' => $customers,
            'page' => 'customer',
            'users' => $users
        ]);
    }

    public function store(Request $request){
        $customer = $request->validate([
            'customer_name' => 'required|string|max:255',
            'phone_number' => 'required|max:20',
            'address' => 'required',
            'user_id' => 'required|integer'
        ]);

        if($request->hasFile('photo')){
            $request->validate([
                'photo' => 'image|max:2048'
            ]);
            $customer['photo'] = $request->file('photo')->store('public/images');
            $customer['photo'] = str_replace('public', 'storage', $customer['photo']);
        } else {
            $customer['photo'] = "";            
        }

        Customer::create($request->all());
        return redirect()->route('dashboard.customer.index')->with('success', 'Customer created successfully.');
    }

    public function update(Request $request, $id){
        $customer = Customer::findOrFail($id);
        $data = $request->validate([
            'customer_name' => 'required|string|max:255',
            'phone_number' => 'required|max:20',
            'address' => 'required',
            'user_id' => 'required|integer'
        ]);
        if($request->hasFile('photo')){
            $request->validate([
                'photo' => 'image|max:2048'
            ]);
            $data['photo'] = $request->file('photo')->store('public/images');
            $data['photo'] = str_replace('public', 'storage', $data['photo']);
        } else {
            $data['photo'] = "";
        }
        $customer->update($data);
        return redirect()->route('dashboard.customer.index')->with('success', 'Customer updated successfully.');
    }

    public function destroy($id){
        $customer = Customer::findOrFail($id);
        $customer->delete();
        return redirect()->route('dashboard.customer.index')->with('success', 'Customer deleted successfully.');
    }
}
