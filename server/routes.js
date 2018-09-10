const express = require('express')
const router = express.Router()
const db = require('./db')


router.get('/owners', function(req, res){
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
