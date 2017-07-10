var express = require('express');
var app = express();
var cl = require('./modules/cl');

app.use(express.static('public'));

app.get('/', function(req, res) {  
  res.send('hello world');
});

app.get('/images', cl);

app.listen(3000);
