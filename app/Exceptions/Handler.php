<?php

namespace App\Exceptions;

use Throwable;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Auth\AuthenticationException;
use Log;
use Request;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Throwable  $exception)
    {
        Log::info($exception->getMessage(), [
            'url' => Request::url()
        ]);
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Throwable  $exception)
    {
        return parent::render($request, $exception);
    }

    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson() OR strpos($request->path(), "api/v1") === 0) {
            return response()->json(['message' => 'Action not authorized!'], 401);
        }
        if ($request->expectsJson() OR strpos($request->path(), "api/radio") === 0) {
            return response()->json([
                'code' => 10100,
                'message' => 'Action not authorized!',
                'data' => null
            ], 401);
        }

        return redirect()->guest(route('login'));
    }
}
