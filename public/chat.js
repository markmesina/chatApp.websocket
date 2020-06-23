// make connection
const socket = io.connect('http://localhost:8080');

//query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

//event
btn.addEventListener('click', () =>{
    //takes 2 params message and cb ghandle
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
})

// listen for event
socket.on('chat', (data)=> {
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' 
    + data.message + '</p>';
});

socket.on ('typing', (data) => {
    feedback.innerHTML = '<p><em>' + data + 
    ' is typing a message...</p></em>' ;
});
