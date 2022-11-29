const express = require('express');
const router = express.Router();
const User = require('../models/User');

// create a User using POST "/api/auth". doesn't require Auth
router.get('/', (req, res)=>{
    console.log(req.body)
    const user = User(req.body); // to create a new user
    user.save() 
    res.send(req.body)  
})

module.exports = router;