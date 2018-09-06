const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getOwners: getOwners
}

function getOwners (testConn) {
    const conn = testConn || connection
    return conn ('owners')
    .select()
}