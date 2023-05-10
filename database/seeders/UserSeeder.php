<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
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


        //create 5 additional users, all passwords for these users will be password, but they will be randomly generated email addresses.
        User::factory()->count(5)->create();


    }
}
