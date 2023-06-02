<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check() && Auth::user()->role === 'admin') {
            return $next($request);
        }

        if (Auth::check() && Auth::user()->role === 'treasurer') {
            return redirect()->route('dashboard.travel-package.index')->with('error', 'You are not authorized to access this page.');
        } else if (Auth::check() && Auth::user()->role === 'customer') {
            return redirect()->route('dashboard.customer.index')->with('error', 'You are not authorized to access this page.');
        }

        return redirect()->route('home')->with('error', 'You are not authorized to access this page.');
    }
}