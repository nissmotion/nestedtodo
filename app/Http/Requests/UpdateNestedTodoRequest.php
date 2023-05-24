<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class UpdateNestedTodoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(Request $request): array
    {
        if (isset($request->complete)) {
            return [
                'nested_complete' => 'required|boolean',
            ];
        }
        if (isset($request->description)) {
            return [
                'nested_description' => 'required|string|max:255',
            ];
        }
        throw ValidationException::withMessages([
            'message'   => 'Incorrect Data.',
            'data'      => $request->all()
        ]);
    }
}
