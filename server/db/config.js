const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/bugs', {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});
const db = mongoose.connection

db.once('open', console.log.bind(console, "Mongoose is connected to MongoDB"))

module.exports = db