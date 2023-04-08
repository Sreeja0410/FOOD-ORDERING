const express = require('express')

const router = express.Router()

const User = require('../models/userModel')

router.post('/create-user', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        userid:req.body.userid
    })

     await user.save();

    return res.status(200).send({ message: "signed up"});


})




module.exports = router
