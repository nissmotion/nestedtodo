<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('nested_todos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('todo_id');
            $table->string('description');
            $table->tinyInteger('children_complete')->default(0);
            $table->tinyInteger('complete')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nested_todos');
    }
};
