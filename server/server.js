require('./config/config')
const express = require('express')
const questions = require('./controllers/questions')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/questions', questions)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Started up at port ${port}`)
})
module.exports = { app }
