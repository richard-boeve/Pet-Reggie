const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)



function getOwners (id, testConn) {
    const conn = testConn || connection
    return conn('owners')
    .select()
}

function saveOwner(owner, testConn) {
    const conn = testConn || connection           
    return conn ('owners')
        .insert(owner)
}

module.exports = {
    getOwners: getOwners,
    saveOwner: saveOwner
}