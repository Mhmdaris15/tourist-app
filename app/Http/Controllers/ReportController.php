<?php


namespace App\Http\Controllers;

use App\Models\User;
// use Barryvdh\DomPDF\Facade\Pdf as FacadePdf;
use Illuminate\Http\Request;
use Inertia\Inertia;
// use Barryvdh\DomPDF\PDF;
use PDF;


class ReportController extends Controller
{
    public function index(){
        $users = User::all();

        $data = [
            'title' => "Report of User",
            'date' => date('Y-m-d H:i:s'),
            'users' => $users
        ];
        // view()->share('users', $users);
        $pdf = PDF::loadView('user', $data);
        return $pdf->download('user.pdf');
        // return view('user', $data);
    }
}