<?php

namespace App\Http\Controllers\payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class indexController extends Controller
{
    public function index(Request $request)
    {
        return view("payment.index");
    }

    public function success(Request $request)
    {
        return view("payment.success");
    }

    public function error(Request $request)
    {
        return view("payment.error");
    }
}
