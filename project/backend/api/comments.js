const express = require('express');
const router = express.Router();
const Advert = require('../model/advert');
const mongoose = require('mongoose');
const Comment = require('../model/comment');

router.post('/', (req,res) => {
    const {userName, comment, adId} = req.body;
     const newComment = new Comment({
         userName: userName,
         comment: comment,
         adId: adId
     })
    newComment.save();
  res.status(201).send({message: "Appointment created"})
})

module.exports = router;