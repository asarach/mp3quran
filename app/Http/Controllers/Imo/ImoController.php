<?php

namespace App\Http\Controllers\Imo;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ImoController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
 * Format the API response.
 *
 * @param  mixed $data
 * @param  string $message
 * @param  int $code
 * @return \Illuminate\Http\Response
 */
protected function formatResponse($data, $message = 'success', $code = 0)
{
    return response()->json([
        'code' => $code,
        'message' => $message,
        'data' => $data
    ]);
}

}
