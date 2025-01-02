<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix'=>'/','as'=>'back.'],function (){
    Route::get('',[\App\Http\Controllers\back\socket\indexController::class,'index'])->name('index');
    Route::post('send-message',[\App\Http\Controllers\back\socket\indexController::class,'send_message'])->name('send_message');
});
