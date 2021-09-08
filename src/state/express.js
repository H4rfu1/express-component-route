const express = require('express')
const compression = require('compression')

const app = express()
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
module.exports = { app, express }
