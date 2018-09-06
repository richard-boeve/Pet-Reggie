const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)



function getOwners (id, testConn) {
    const conn = testConn || connection
    return conn('owners')
    .select()
}

module.exports = {
    getOwners: getOwners
}