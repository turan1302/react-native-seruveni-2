<?php

use Illuminate\Support\Facades\Route;

Route::group(["prefix"=>"/payment","as"=>"payment."],function (){
    Route::get("/",[\App\Http\Controllers\payment\indexController::class,"index"])->name("index");
    Route::get("/success",[\App\Http\Controllers\payment\indexController::class,"success"])->name("success");
    Route::get("/error",[\App\Http\Controllers\payment\indexController::class,"error"])->name("error");
});
