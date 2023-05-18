<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    public function index(){
        $employees = Employee::all();
        $users = User::where('role', 'admin')->orWhere('role', 'treasurer')->orWhere('role', 'owner')->get();
        return Inertia::render('Dashboard', [
            'employees' => $employees,
            'users' => $users,
            'page' => 'employee'
        ]);
    }

    public function store(Request $request){
        $employee = $request->validate([
            'name' => 'required|max:100',
            'address' => 'required',
            'phone' => 'required',
            'position' => 'required',
            'user_id' => 'required|integer',
        ]);

        Employee::create($employee);

        return redirect()->route('dashboard.employee.index')->with('success', 'Employee created successfully');
    }

    public function update(Request $request, $id){
        
        $employee = Employee::findOrfail($id);
        
        $data = $request->validate([
            'name' => 'required|max:100',
            'address' => 'required',
            'phone' => 'required',
            'position' => 'required',
            'user_id' => 'required|integer',
        ]);
        
        $employee->update($data);
        
        return redirect()->route('dashboard.employee.index')->with('success', 'Employee updated successfully');
    }

    public function destroy($id){
        $employee = Employee::findOrfail($id);
        $employee->delete();
        return redirect()->route('dashboard.employee.index')->with('success', 'Employee deleted successfully');
    }
}
