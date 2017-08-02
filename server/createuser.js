const User = require('./usermodel.js'),
      mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nextuagenda')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

let user = new User({
    id: Math.floor(Math.random() * 50),
    nombre: 'Fabian',
    password: '123456',
    birthday: Date('2017-08-01'),
    email: 'fabian.duarte@mail.com'
})
user.save(function(error) {
    if (error) {
        console.log("error: "+error);
    }
    console.log("Registro guardado");
})
