const express = require('express');

// App set up

const app = express();
const PORT = 8080
const server = app.listen(PORT, function() {
    console.log (`App running on server ${PORT}`)
});

// static files

app.use(express.static('public'));