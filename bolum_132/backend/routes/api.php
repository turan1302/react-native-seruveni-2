<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post("/licence-control",[\App\Http\Controllers\api\licence\indexController::class,'control']);
