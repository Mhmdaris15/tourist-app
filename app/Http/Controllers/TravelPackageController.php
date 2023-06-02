<?php

namespace App\Http\Controllers;

use App\Models\TravelPackage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TravelPackageController extends Controller
{
    public function index()
    {
        $travelPackages = TravelPackage::all();
        return Inertia::render('Dashboard', [
            'travelPackages' => $travelPackages,
            'page' => 'travel-package',
        ]);
    }

    public function store(Request $request){
        $travelPackage = $request->validate([
            'package_name' => 'required|string|max:255',
            'description' => 'required|string',
            'facilities' => 'required|string',
            'price' => 'required|integer',
            'discount' => 'required|numeric',
        ]);

        for ($i = 1; $i <= 5; $i++) {
            if ($request->hasFile('image_' . $i)) {
                $request->validate([
                    'image_' . $i => 'image|max:2048',
                ]);
                $travelPackage['image_' . $i] = $request->file('image_' . $i)->store('public/images');
                $travelPackage['image_' . $i] = str_replace('public', 'storage', $travelPackage['image_' . $i]);
            } else {
                $travelPackage['image_' . $i] = "";
            }
        }

        TravelPackage::create($travelPackage);

        return redirect()->route('dashboard.travel-package.index')->with('success', 'Travel Package created successfully');
    }

    public function update(Request $request, $id){
        $travelPackage = TravelPackage::findOrfail($id);
        $data = $request->validate([
            'package_name' => 'required|string|max:255',
            'description' => 'required|string',
            'facilities' => 'required|string',
            'price' => 'required|integer',
            'discount' => 'required|numeric',
        ]);

        for ($i = 1; $i <= 5; $i++) {
            if ($request->hasFile('image_' . $i)) {
                $request->validate([
                    'image_' . $i => 'image|max:2048',
                ]);
                $data['image_' . $i] = $request->file('image_' . $i)->store('public/images');
                $data['image_' . $i] = str_replace('public', 'storage', $data['image_' . $i]);
            } else {
                $data['image_' . $i] = $travelPackage['image_' . $i];
            }
        }

        $travelPackage->update($data);

        return redirect()->route('dashboard.travel-package.index')->with('success', 'Travel Package updated successfully');
    }

    public function destroy($id){
        $travelPackage = TravelPackage::findOrfail($id);
        $travelPackage->delete();
        return redirect()->route('dashboard.travel-package.index')->with('success', 'Travel Package deleted successfully');
    }
}