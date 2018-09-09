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
    
    const owner =  {
            firstName: first_name,
            lastName: last_name,
            street: street,
            suburb: suburb,
            city: city,
            postcode: postcode,
            country: country,
            phone1: phone1,
            phone2: phone2,
            phone3: phone3,
            email1: email1,
            email2: email2,
            email3: email3,
    }
           
    return conn ('owners')
        .insert(owner)
}

module.exports = {
    getOwners: getOwners,
    saveOwner: saveOwner
}