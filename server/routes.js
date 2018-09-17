const express = require('express')
const router = express.Router()
const db = require('./db')
const token = require('./auth/token')


router.get('/owners', token.decode, function(req, res){
    db.getOwners(req.body)
    .then(owners => {
        res.json(owners)
    })
})

router.post('/register', (req) => {
    let data = req.body
    db.saveOwner(data)
    .then(owners => {
        res.json(owners)
    })
})

module.exports = router
