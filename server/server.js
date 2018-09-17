const path = require('path')
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const routes = require('./routes')
const auth = require('./routes/auth')


server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/v1', routes)
server.use('/api/v1/auth/', auth)
server.use(express.json())

module.exports = server