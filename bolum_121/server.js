const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 3000;

io.on('connection', function (socket) {
    console.log('Birileri Geldi');

    socket.on("send_message",function (data){
        io.emit("sender",{
            message : data.mesaj
        });
    });

    socket.on('disconnect', function () {
        console.log('Birileri Geldi ve Gitti');

    });
});

http.listen(PORT, (req, res, send) => {
    console.log(`${PORT} portu dinleniyor`);
});
