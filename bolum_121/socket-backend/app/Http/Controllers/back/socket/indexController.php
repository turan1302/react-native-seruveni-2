<?php

namespace App\Http\Controllers\back\socket;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use ElephantIO\Client;


class indexController extends Controller
{
    public function index()
    {
        return view('back.socket.index');
    }

    public function send_message(Request $request)
    {
        $data = $request->except("_token");

        $options = ['client' => Client::CLIENT_4X];
        $socket = Client::create(SOCKET_URL, $options);
        $socket->connect();
        $socket->of("/");
        $socket->emit("send_message", [
            "mesaj" => $data['message']
        ]);
        $socket->disconnect();
    }
}
