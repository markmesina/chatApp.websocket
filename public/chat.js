// make connection
const socket = io.connect('http://localhost:8080');

//query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');

//event
btn.addEventListener('click', () =>{
    //takes 2 params message and cb ghandle
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

// listen for event
socket.on('chat', (data)=> {
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' 
    + data.message + '</p>'
})
