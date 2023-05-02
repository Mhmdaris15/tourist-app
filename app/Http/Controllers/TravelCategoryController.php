<?php

namespace App\Http\Controllers;

use App\Models\TravelCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TravelCategoryController extends Controller
{
    public function index()
    {
        $travelCategories = TravelCategory::all();
        return Inertia::render('Dashboard', [
            'travelCategories' => $travelCategories,
            'page' => 'travel-category'
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'category_name' => 'required|unique:travel_categories|max:255'
        ]);
        $travelCategory = new TravelCategory();
        $travelCategory->category_name = $request->category_name;
        $travelCategory->save();
        return redirect()->route('dashboard.travel-category.index')->with('success', 'Travel Category created successfully');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'category_name' => 'required|unique:travel_categories|max:255'
        ]);
        $travelCategory = TravelCategory::find($id);
        $travelCategory->category_name = $request->category_name;
        $travelCategory->save();
        return redirect()->route('dashboard.travel-category.index')->with('success', 'Travel Category updated successfully');
    }

    public function destroy($id)
    {
        $travelCategory = TravelCategory::find($id);
        $travelCategory->delete();
        return redirect()->route('dashboard.travel-category.index')->with('success', 'Travel Category deleted successfully');
    }
}
