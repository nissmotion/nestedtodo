<?php

namespace App\Models;

use App\Models\User;
use App\Models\NestedTodo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Todo extends Model
{
    use HasFactory, SoftDeletes;

    /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = [
        'user_id',
        'description',
        'children_complete',
        'complete',
    ];

    /**
     * Get the user that owns the Todo
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get all of the nestedTodos for the Todo
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function nestedTodos(): HasMany
    {
        return $this->hasMany(NestedTodo::class);
    }
}
