<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\NewsCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    //
    public function index()
    {
        $news = News::all();

        $categories = NewsCategory::all();
        return Inertia::render('Dashboard', [
            'news' => $news,
            'categories' => $categories,
            'page' => 'news'
        ]);
    }

    public function store(Request $request)
    {
        $news = $request->validate([
            'news_title' => 'required|string|max:255',
            'news_content' => 'required|string',
            'news_date' => 'required|date',
            'news_category_id' => 'required|integer',
            'news_image' => 'required|image|max:2048',
        ]);

        $news['news_slug'] = Str::slug($news['news_title']);
        $news['news_image'] = $request->file('news_image')->store('public/images');
        $news['news_image'] = str_replace('public', 'storage', $news['news_image']);

        News::create($news);
        
        return redirect()->route('dashboard.news.index')->with('success', 'News created successfully');
    }

    public function update(Request $request, $id)
    {
        $news = News::findOrfail($id);
        $data = $request->validate([
            'news_title' => 'required|string|max:255',
            'news_content' => 'required|string',
            'news_date' => 'required|date',
            'news_category_id' => 'required|integer',
        ]);
        $data['news_slug'] = Str::slug($data['news_title']);

        if ($request->hasFile('news_image')) {
            $request->validate([
                'news_image' => 'image|max:2048',
            ]);
            $data['news_image'] = $request->file('news_image')->store('public/images');
            $data['news_image'] = str_replace('public', 'storage', $data['news_image']);
        }

        $news->update($data);

        return redirect()->route('dashboard.news.index')->with('success', 'News updated successfully');
    }

    public function destroy($id)
    {
        $news = News::find($id);
        $news->delete();

        return redirect()->route('dashboard.news.index')->with('success', 'News deleted successfully');
    }
}