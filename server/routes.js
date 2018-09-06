const express = require('express')
const router = express.Router()

const db = require('./db')


router.get('/owners', function(req, res){
    db.getOwners(req.params)
    .then(owners => {
        res.json(owners)
    })
})

module.exports = router

// router.get('/owners', function(req, res){
//     const owners = db.getOwners()
//     res.json(owners)
// })