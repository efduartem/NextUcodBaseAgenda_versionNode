const mongoose = require('mongoose')

const Schema = mongoose.Schema

let userSchema = new Schema({
  id: { type: Number, required: true, unique: true},
  nombre: { type: String, required: true },
  password: { type: String, required: true},
  birthday: { type: Date, required: false},
  email: { type: String, required: true}
})

let User = mongoose.model('User', userSchema)

module.exports = User
