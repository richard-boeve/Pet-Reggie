const path = require('path')
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
//onst routes = require('./routes/route')

//server.use('/', routes)

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, 'public')))


module.exports = server