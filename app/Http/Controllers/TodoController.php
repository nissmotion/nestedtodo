<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreTodoRequest;
use App\Http\Requests\UpdateTodoRequest;
use Illuminate\Database\Eloquent\Builder;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dashboard', [
            'todos' => Todo::where('user_id', Auth::id())->with('nestedTodos')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTodoRequest $request)
    {
        /** @var \App\User|null $user */
        $user = Auth::user();

        $todo = $user->todos()->create($request->validated());

        return response($todo, 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTodoRequest $request, string $id)
    {
        $todo = Todo::select('id')->where('id', $id)
            ->when(isset($request->complete), function (Builder $query) {
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
        $doomed = Todo::destroy($id);

        return response([
            'id' => $id,
            'status' => 'deleted',
        ], 200);
    }
}
