const express = require('express');
const socket = require('socket.io');

// App set up
const app = express();
const PORT = 8080 || process.env.PORT;
const server = app.listen(PORT, function() {
    console.log (`App running on PORT ${PORT}`)
});

// static files middleware
app.use(express.static('public'));

//socket middleware
const io = socket(server);
io.on('connection', (socket) => {
    console.log(socket)
    console.log('socket connection initialized', socket.id);

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });
    socket.on ('typing', (data) => {
        socket.broadcast.emit('typing', data)
    });
    
});