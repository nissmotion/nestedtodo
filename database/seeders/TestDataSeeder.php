<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\Todo;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TestDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //create kevin and caylins user accounts
        $kevin = User::create([
            'name' => 'Kevin Hood',
            'email' => 'kevin@kevin',
            'password' => Hash::make('kevin@kevin'),
            'remember_token' => Str::random(10),
            'email_verified_at' => Carbon::now(),
        ]);

        $caylin = User::create([
            'name' => 'Caylin James',
            'email' => 'caylin@caylin',
            'password' => Hash::make('caylin@caylin'),
            'remember_token' => Str::random(10),
            'email_verified_at' => Carbon::now(),
        ]);

        //generate todos for kevin and caylin

        Todo::factory()->count(10)->for($kevin)->create();
        Todo::factory()->count(10)->for($caylin)->create();

        //create 5 additional users and a todo list of 8 items for each, all passwords for these users will be password, but they will be randomly generated email addresses.
        User::factory()
            ->count(3)
            ->hasTodos(8)
            ->create();
    }
}
