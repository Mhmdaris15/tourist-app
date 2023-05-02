<?php

namespace App\Http\Controllers;

use App\Models\NewsCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsCategoryController extends Controller
{
    public function index()
    {
        $categories = NewsCategory::all();
        return Inertia::render('Dashboard', [
            'categories' => $categories,
            'page' => 'news-category'
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'news_category_name' => 'required|unique:news_categories|max:255'
        ]);
        $category = new NewsCategory();
        $category->news_category_name = $request->news_category_name;
        $category->save();
        return redirect()->route('dashboard.news-category.index')->with('success', 'News Category created successfully');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'news_category_name' => 'required|unique:news_categories|max:255'
        ]);
        $category = NewsCategory::find($id);
        $category->news_category_name = $request->news_category_name;
        $category->save();
        return redirect()->route('dashboard.news-category.index')->with('success', 'News Category updated successfully');
    }

    public function destroy($id)
    {
        $category = NewsCategory::find($id);
        $category->delete();
        return redirect()->route('dashboard.news-category.index')->with('success', 'News Category deleted successfully');
    }
}
