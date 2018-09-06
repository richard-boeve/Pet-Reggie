const path = require('path')
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const routes = require('./routes')


server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/v1', routes)

module.exports = server