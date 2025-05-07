<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User; // Importez la classe User
use Illuminate\Support\Facades\Hash; // Importez la classe Hash

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Massoda Marguerite Isis',
            'email' => 'isismassoda@gmail.com',
            'password' => Hash::make('isis1234'),
            'role' => 'admin', // Ou la valeur de votre colonne de rôle
        ]);
    }
}
