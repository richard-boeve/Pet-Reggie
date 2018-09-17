const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)
const hash = require('../auth/hash')


module.exports = {
    createUser,
    userExists,
    getUserByName
  }
  
  function createUser (username, password, testConn) {
    const passwordHash = hash.generate(password)
    const conn = testConn || connection
    return conn('users')
      .insert({username, hash: passwordHash})
  }
  
  function userExists (username, testConn) {
    const conn = testConn || connection
    return conn('users')
      .count('id as n')
      .where('username', username)
      .then(count => {
        return count[0].n > 0
      })
    }

  function getUserByName (username, testConn) {
    const conn = testConn || connection
    return conn('users')
      .select()
      .where('username', username)
      .first() 
    }