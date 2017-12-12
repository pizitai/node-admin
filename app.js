var express = require('express');
var swig = require('swig');
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var Cookies = require('cookies')
var app = express();


app.use('/public', express.static(__dirname + '/public'))
app.use('/static', express.static(__dirname + '/static'))


app.use('/admin',require('./routers/admin'));

app.get('/', function (req, res, next) {
    res.send('<h1>欢迎光临我的博客</h1>')
});


app.listen(8081);
