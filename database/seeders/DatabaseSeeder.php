<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        User::factory(10)->create();
        try {
            User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => '2wsx1qaz',
            'role' => 'admin'
        ]);

        } catch (\Throwable $th) {
            //throw $th;
        }
    
    
    }
}
