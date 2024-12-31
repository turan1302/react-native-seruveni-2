const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = 5000;

io.on("connection", function(socket) {
    console.log("Birileri Geldi");


    socket.on("disconnect", function() {
        console.log("Birileri Geldi ve Gitti");
        socket.disconnect();
    });
});

http.listen(PORT, (req, res, send) => {
    console.log(`${PORT} portu dinleniyor`);
});
