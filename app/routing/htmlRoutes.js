const path = require('path')
const express = require('express')
const app = express()

app.get('/add', function (req, res) {
  res.sendFile(path.join(__dirname, '/../public/survey.html'))
})

app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/../public/home.html'))
})

module.exports = app
