const server = require('./server/server')

const port = process.env.PORT || 3005

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})