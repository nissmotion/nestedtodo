<?php

namespace App\Observers;

use App\Helpers\Helpers;
use App\Models\NestedTodo;

class NestedTodoObserver
{
    /**
     * Handle the NestedTodo "created" event.
     */
    public function created(NestedTodo $nestedTodo): void
    {
        //
    }

    /**
     * Handle the NestedTodo "updated" event.
     */
    public function updated(NestedTodo $nestedTodo): void
    {
        // Helpers::markParentTodoComplete($nestedTodo);
    }

    /**
     * Handle the NestedTodo "deleted" event.
     */
    public function deleted(NestedTodo $nestedTodo): void
    {
        //
    }

    /**
     * Handle the NestedTodo "restored" event.
     */
    public function restored(NestedTodo $nestedTodo): void
    {
        //
    }

    /**
     * Handle the NestedTodo "force deleted" event.
     */
    public function forceDeleted(NestedTodo $nestedTodo): void
    {
        //
    }
}
