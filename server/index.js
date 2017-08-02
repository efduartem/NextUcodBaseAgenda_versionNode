/*
* Dependencias
*/

var http = require('http'),
    express = require('express'),
    bodyParser  = require('body-parser'),
    login    = require('./Login'),
    eventRouter    = require('./Event'),
    path = require('path'),
    mongoose = require('mongoose')

var port = 3000
var app = express()

mongoose.connect('mongodb://localhost/nextuagenda')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/login', login)
app.use('/events', eventRouter)

app.use(express.static(path.join(__dirname, '../')+'public'))//public

var Server = http.createServer(app)

Server.listen(port, function () {
    console.log('Schedule is ready for play on port: '+port)
})
