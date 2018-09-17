const express = require('express')
const router = express.Router()
const {userExists, createUser} = require('../db/users')
const token = require('../auth/token')

router.post('/registeruser', registeruser, token.issue)


function registeruser (req, res, next) {
    userExists(req.body.username)
      .then(exists => {
        if (exists) {
          return res.status(400).send({ message: 'User exists' })
        }
        createUser(req.body.username, req.body.password)
          .then(() => next())
      })
      .catch(err => {
        res.status(500).send({ message: err.message })
      })
  }

  router.get('/username', token.decode, (req, res) => {
    res.json({
      username: req.user.username
    })
  })
  
  module.exports = router