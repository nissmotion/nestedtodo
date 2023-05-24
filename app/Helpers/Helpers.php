<?php

namespace App\Helpers;

use App\Models\Todo;
use App\Models\NestedTodo;

class Helpers
{
    public static function updateChildren(Todo $todo)
    {
        //if marking complete, mark all children complete
        if ($todo->isDirty('complete') && $todo->complete) {
            $todo->nestedTodos()->update([
                'complete' => 1,
            ]);
        }

        //if marking incomplete, unmark the last updated nested todo
        if ($todo->isDirty('complete') && !$todo->complete) {
            $mostRecentlyUpdated = $todo->nestedTodos->sortByDesc('updated_at')->first();
            $mostRecentlyUpdated->update([
                'complete' => 0,
            ]);
        }

    }
}
