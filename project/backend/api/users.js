const express = require('express');
const router = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');

router.get('/:id', (req,res) => {
     const id = req.params['id'].substring(1);
     console.log(id);
        User.findOne({ '_id': id }, function(err, u){
            res.send(u);
        })
})


module.exports = router;