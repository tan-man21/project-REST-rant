const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  pic: {type: String, default: 'https://images.unsplash.com/photo-1612878010854-1250dfc5000a?q=80&w=940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  cuisines: {type: String, required: true},
  city: {type: String, default: 'Anytown'},
  state: {type: String, default: 'USA'},
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)