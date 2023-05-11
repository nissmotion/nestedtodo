<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\NestedTodo>
 */
class NestedTodoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $number = rand(0, 500);

        $random = $number % 2 == 0 ? 1 : 0;

        return [
            'description' => fake()->sentence(6),
            'complete' => $random,
        ];
    }
}
