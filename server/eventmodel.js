const mongoose = require('mongoose')

const Schema = mongoose.Schema

let eventSchema = new Schema({
  id: { type: Number, required: true, unique: true},
  title: { type: String, required: true },
  start: { type: Date, required: true},
  end: { type: Date, required: false},
  allDay: { type: Boolean, required: false}
})

let Event = mongoose.model('Event', eventSchema)

module.exports = Event
