var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    console.log(req.query);
    res.sendFile(path.join(__dirname + '/index.html'));
});

var port = 8080;
console.log('Listening on port: ' + port);
app.listen(port);
