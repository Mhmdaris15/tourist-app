<?php

namespace App\Http\Requests;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if($this->user()->role === 'admin') {
            return true;
        }
        return false;
    }

    protected function failedAuthorization()
    {
        $exception = new AuthorizationException('You are not authorized to update users.', 403);
        throw $exception->redirectTo('dashboard.user', "You are not authorized to update users.");
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }
}
