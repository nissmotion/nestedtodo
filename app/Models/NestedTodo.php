<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class NestedTodo extends Model
{
    use HasFactory, SoftDeletes;

    /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = [
        'todo_id', 'description', 'children_complete', 'complete',
    ];

    /**
     * Get the todo that owns the NestedTodo
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function todo(): BelongsTo
    {
        return $this->belongsTo(Todo::class);
    }

     /**
     * Scope a query to only include complete nestedTodos.
     */
    public function scopeComplete(Builder $query): void
    {
        $query->where('complete', 1);
    }
}
