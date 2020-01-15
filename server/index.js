const express = require('express');
const routes = require('./router')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

app.use((req, res, next) => {
  res.status(404).send('Not Found')
})

app.listen(port, console.log.bind(console, `App listening on Port: ${port}`))