<?php


namespace App\Http\Controllers;

use App\Models\Reservation;
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
        $reservations = Reservation::all();

        $data = [
            'title' => "Report of User",
            'date' => date('Y-m-d H:i:s'),
            'reservations' => $reservations,
        ];

        $date = date('Y-m-d H:i:s');

        // view()->share('users', $users);
        $report_view = ssr('report.blade.php', $data);
        // $pdf = PDF::loadView('report', $data);
        // return $pdf->download('report-'.$date.'.pdf');
        return response($report_view)->header('Content-Type', 'text/html');

    }
}