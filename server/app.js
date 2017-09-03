var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var index = require('./routes/index');
var user = require('./routes/user');
var cors = require('cors')
require('dotenv').config()

var app = express();

mongoose.connect(`mongodb://gani:${process.env.DB_PASS}@cluster0-shard-00-00-djkcw.mongodb.net:27017,cluster0-shard-00-01-djkcw.mongodb.net:27017,cluster0-shard-00-02-djkcw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`, err => {
  if(!err){
    console.log('connected to server atlas mongo');
  }else{
    console.log('connection error');
  }
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', user);

module.exports = app;
