var express = require('express');
var bodyParser = require('body-parser');
var app = express(); 

var arrBabes = [];

// parse application/json
app.use(bodyParser.json());
app.use(express.static('.'));

app.post('/data/babe', function(req, res){
    console.log('pushing a babe', req.body);
   arrBabes.push(req.body); 
   res.end();
});

app.get('/data/babes', function(req, res){
    console.log('dumping all babes');
    res.end(JSON.stringify(arrBabes));
}); 

app.listen(1337, function(){ console.log('babe serving...');})

