const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.get('/users/getUser', (req,res) => {
    const {data} = req.body;
    const user = await User.findOne({email: data});
    res.send(user);
})


module.exports = router;