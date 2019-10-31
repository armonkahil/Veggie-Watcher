const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Chart = require('chart.js')
let myChart = new Chart()
var app = express()
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(PORT, function () {
  console.log('App listening on Port ' + PORT)
})
