const mongoose = require('mongoose')
const db = require('./config')

const bugSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  description: String,
  reportedBy: String,
  created: { type: Date, default: Date.now },
  assignedTo: String,
  threatLevel: String
})

const Bug = mongoose.model('Bug', bugSchema)

module.exports = { Bug }