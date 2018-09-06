const express = require('express')
const router = express.Router()

const db = require('./db')

// router.get('/', function(req,res){
//     res.send('hello')
// })

router.get('/owners', function(req, res){
    const owners = db.getOwners()
    res.json(owners)
})

module.exports = router