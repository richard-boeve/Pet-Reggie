const express = require('express')
const server = express()
const routes = require('./routes/route')

server.use('/', routes)


module.exports = server