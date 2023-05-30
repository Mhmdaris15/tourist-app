<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{

    public function index(){
        $blogs = News::all();
        $authenticated = auth()->user();
        return Inertia::render('BlogHome', [
            'blogs' => $blogs,
            'page' => 'blog',
            'authenticated' => $authenticated
        ]);
    }

    public function show($slug){
        $authenticated = auth()->user();
        $blog = News::where('news_slug', $slug)->firstOrFail();
        return Inertia::render('Blog', [
            'blog' => $blog,
            'page' => 'blog',
            'authenticated' => $authenticated
        ]);
    }
}