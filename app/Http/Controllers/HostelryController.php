<?php

namespace App\Http\Controllers;

use App\Models\Hostelry;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HostelryController extends Controller
{
    public function index()
    {
        $hostelries = Hostelry::all();
        return Inertia::render('Dashboard', [
            'hostelries' => $hostelries,
            'page' => 'hostelry'
        ]);
    }
    public function store(Request $request){
        $hostelry = $request->validate([
            'hostelry_title' => 'required|string|max:255',
            'hostelry_description' => 'required|string',
            'facilities' => 'required|string',
        ]);

        for ($i = 1; $i <= 5; $i++) {
            if ($request->hasFile('image_' . $i)) {
                $request->validate([
                    'image_' . $i => 'image|max:2048',
                ]);
                $hostelry['image_' . $i] = $request->file('image_' . $i)->store('public/images');
                $hostelry['image_' . $i] = str_replace('public', 'storage', $hostelry['image_' . $i]);
            } else {
                $hostelry['image_' . $i] = "";
            }
        }

        Hostelry::create($hostelry);

        return redirect()->route('dashboard.hostelry.index')->with('success', 'Hostelry created successfully');
    }

    public function update(Request $request, $id){
        $hostelry = Hostelry::findOrfail($id);
        $data = $request->validate([
            'hostelry_title' => 'required|string|max:255',
            'hostelry_description' => 'required|string',
            'facilities' => 'required|string',
        ]);

        for ($i = 1; $i <= 5; $i++) {
            if ($request->hasFile('image_' . $i)) {
                $request->validate([
                    'image_' . $i => 'image|max:2048',
                ]);
                $data['image_' . $i] = $request->file('image_' . $i)->store('public/images');
                $data['image_' . $i] = str_replace('public', 'storage', $data['image_' . $i]);
            } else {
                $data['image_' . $i] = $hostelry['image_' . $i];
            }
        }

        $hostelry->update($data);

        return redirect()->route('dashboard.hostelry.index')->with('success', 'Hostelry updated successfully');
    }

    public function destroy($id){
        $hostelry = Hostelry::findOrfail($id);
        $hostelry->delete();
        return redirect()->route('dashboard.hostelry.index')->with('success', 'Hostelry deleted successfully');
    }
}
