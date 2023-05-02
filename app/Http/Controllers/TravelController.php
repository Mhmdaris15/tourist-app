<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use App\Models\TravelCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TravelController extends Controller
{
    //
    public function index(){
        $travels = Travel::all();
        $categories = TravelCategory::all();
        return Inertia::render('Dashboard', [
            'travels' => $travels,
            'categories' => $categories,
            'page' => 'travel'
        ]);
    }

    public function store(Request $request){
        $travel = $request->validate([
            'travel_title' => 'required|string|max:255',
            'travel_description' => 'required|string',
            'travel_category_id' => 'required|integer',
            'facilities' => 'required|string',
        ]);


        for($i = 1; $i <= 5; $i++){
            if ($request->hasFile('image_'.$i)) {
                $request->validate([
                    'image_'.$i => 'image|max:2048',
                ]);
                $travel['image_'.$i] = $request->file('image_'.$i)->store('public/images');
                $travel['image_'.$i] = str_replace('public', 'storage', $travel['image_'.$i]);
            } else {
                $travel['image_'.$i] = "";
            }
        }

        Travel::create($travel);
        
        return redirect()->route('dashboard.tourist-attraction.index')->with('success', 'Travel created successfully');
    }

    public function update(Request $request, $id){
        $travel = Travel::findOrfail($id);
        $data = $request->validate([
            'travel_title' => 'required|string|max:255',
            'travel_description' => 'required|string',
            'travel_category_id' => 'required|integer',
            'facilities' => 'required|string',
        ]);

        for($i = 1; $i <= 5; $i++){
            if ($request->hasFile('image_'.$i)) {
                $request->validate([
                    'image_'.$i => 'image|max:2048',
                ]);
                $data['image_'.$i] = $request->file('image_'.$i)->store('public/images');
                $data['image_'.$i] = str_replace('public', 'storage', $data['image_'.$i]);
            } else {
                $data['image_'.$i] = $travel['image_'.$i];
            }
        }
        
        $travel->update($data);
        
        return redirect()->route('dashboard.tourist-attraction.index')->with('success', 'Travel updated successfully');
    }

    public function destroy($id){
        $travel = Travel::findOrfail($id);
        // Storage::delete($travel->image_1);
        // Storage::delete($travel->image_2);
        // Storage::delete($travel->image_3);
        // Storage::delete($travel->image_4);
        // Storage::delete($travel->image_5);
        $travel->delete();
        return redirect()->route('dashboard.tourist-attraction.index')->with('success', 'Travel deleted successfully');
    }
}
