const express = require('express')
const router = express.Router()

const db = require('./db')


router.get('/owners', function(req, res){
    db.getOwners(req.body)
    .then(owners => {
        res.json(owners)
    })
})

router.post('/register', (req, res) => {
    db.saveOwner(req.body)
    console.log(req.body)
    .then(ids => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
