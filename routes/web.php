<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\HostelryController;
use App\Http\Controllers\NewsCategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\TravelCategoryController;
use App\Http\Controllers\TravelController;
use App\Http\Controllers\TravelPackageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::resource('/dashboard/user', UserController::class)->middleware(['auth', 'verified'])->names(([
    'index' => 'dashboard.user',
    'store' => 'dashboard.user.store',
    'update' => 'dashboard.user.update',
    'destroy' => 'dashboard.user.destroy',
]));

Route::resource('/dashboard/news-category', NewsCategoryController::class)->middleware(['auth', 'verified', 'admin'])->names(([
    'index' => 'dashboard.news-category.index',
    'store' => 'dashboard.news-category.store',
    'update' => 'dashboard.news-category.update',
    'destroy' => 'dashboard.news-category.destroy',
]));

Route::resource('/dashboard/news', NewsController::class)->middleware(['auth', 'verified', 'admin'])->names(([
    'index' => 'dashboard.news.index',
    'store' => 'dashboard.news.store',
    'update' => 'dashboard.news.update',
    'destroy' => 'dashboard.news.destroy',
]));

Route::resource('/dashboard/travel-category', TravelCategoryController::class)->middleware(['auth', 'verified', 'admin'])->names(([
    'index' => 'dashboard.travel-category.index',
    'store' => 'dashboard.travel-category.store',
    'update' => 'dashboard.travel-category.update',
    'destroy' => 'dashboard.travel-category.destroy',
]));

Route::resource('/dashboard/tourist-attraction', TravelController::class)->middleware(['auth', 'verified', 'admin'])->names(([
    'index' => 'dashboard.tourist-attraction.index',
    'store' => 'dashboard.tourist-attraction.store',
    'update' => 'dashboard.tourist-attraction.update',
    'destroy' => 'dashboard.tourist-attraction.destroy',
]));

Route::resource('/dashboard/hostelry', HostelryController::class)->middleware(['auth', 'verified', 'admin'])->names(([
    'index' => 'dashboard.hostelry.index',
    'store' => 'dashboard.hostelry.store',
    'update' => 'dashboard.hostelry.update',
    'destroy' => 'dashboard.hostelry.destroy',
]));

Route::resource('/dashboard/customer', CustomerController::class)->middleware(['auth', 'verified', 'customer'])->names(([
    'index' => 'dashboard.customer.index',
    'store' => 'dashboard.customer.store',
    'update' => 'dashboard.customer.update',
    'destroy' => 'dashboard.customer.destroy',
]));

Route::resource('/dashboard/travel-package', TravelPackageController::class)->middleware(['auth', 'verified', 'treasurer'])->names(([
    'index' => 'dashboard.travel-package.index',
    'store' => 'dashboard.travel-package.store',
    'update' => 'dashboard.travel-package.update',
    'destroy' => 'dashboard.travel-package.destroy',
]));

Route::resource('/dashboard/employee', EmployeeController::class)->middleware(['auth', 'verified', 'admin'])->names(([
    'index' => 'dashboard.employee.index',
    'store' => 'dashboard.employee.store',
    'update' => 'dashboard.employee.update',
    'destroy' => 'dashboard.employee.destroy',
]));

Route::resource('/dashboard/reservation', ReservationController::class)
    ->middleware(['auth', 'verified', 'treasurer_or_customer'])
    ->names([
        'index' => 'dashboard.reservation.index',
        'store' => 'dashboard.reservation.store',
        'update' => 'dashboard.reservation.update',
        'destroy' => 'dashboard.reservation.destroy',
    ]);

Route::post('/dashboard/news/{id}', [NewsController::class, 'update'])->middleware(['auth', 'verified'])->name('dashboard.news.update');
Route::post('/dashboard/tourist-attraction/{id}', [TravelController::class, 'update'])->middleware(['auth', 'verified'])->name('dashboard.tourist-attraction.update');
Route::post('/dashboard/hostelry/{id}', [HostelryController::class, 'update'])->middleware(['auth', 'verified'])->name('dashboard.hostelry.update');
Route::post('/dashboard/customer/{id}', [CustomerController::class, 'update'])->middleware(['auth', 'verified'])->name('dashboard.customer.update');
Route::post('/dashboard/user/{id}', [UserController::class, 'update'])->middleware(['auth', 'verified'])->name('dashboard.user.update');
Route::post('/dashboard/news-category/{id}', [NewsCategoryController::class, 'update'])->middleware(['auth', 'verified'])->name('dashboard.news-category.update');
Route::post('/dashboard/travel-category/{id}', [TravelCategoryController::class, 'update'])->middleware(['auth', 'verified'])->name('dashboard.travel-category.update');
Route::post('/dashboard/travel-package/{id}', [TravelPackageController::class, 'update'])->middleware(['auth', 'verified'])->name('dashboard.travel-package.update');
Route::post('/dashboard/employee/{id}', [EmployeeController::class, 'update'])->middleware(['auth', 'verified'])->name('dashboard.employee.update');
Route::post('/dashboard/reservation/{id}', [ReservationController::class, 'update'])->middleware(['auth', 'verified'])->name('dashboard.reservation.update');

Route::get('/blogs', [BlogController::class, 'index'])->name('blogs.index');
Route::get('/blogs/{slug}', [BlogController::class, 'show'])->name('blogs.show');

Route::redirect('/dashboard', '/dashboard/user', 301)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php'; // Route for authentication