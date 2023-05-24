<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreNestedTodoRequest;
use App\Http\Requests\UpdateNestedTodoRequest;

class NestedTodoController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNestedTodoRequest $request)
    {

        $todo = Todo::findOrFail($request->todo_id);
        $nestedTodo = $todo->nestedTodos()->create($request->validated());

        return response($nestedTodo, 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNestedTodoRequest $request, string $id)
    {
        $todo = NestedTodo::select('id')->where('id', $id)
            ->when(isset($request->nested_complete), function (Builder $query) {
                $query->addSelect('complete');
            }, function (Builder $query) {
                $query->addSelect('description');
            })
        ->firstOrFail();

        $todo->update($request->validated());

        return response($todo, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $doomed = NestedTodo::destroy($id);

        return response([
            'id' => $id,
            'status' => 'deleted',
        ], 200);
    }
}
