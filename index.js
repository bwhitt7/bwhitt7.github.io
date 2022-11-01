const express = require('express');

require('dotenv').config();
console.log(process.env.API_KEY);
api = process.env.API_KEY;

//console.log(process.env);
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'public')));
// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
    res.send(process.env.API_KEY);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);