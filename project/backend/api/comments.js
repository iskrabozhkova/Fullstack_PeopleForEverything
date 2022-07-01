const express = require("express");
const router = express.Router();
const Advert = require("../model/advert");
const mongoose = require("mongoose");
const Comment = require("../model/comment");

router.post("/", (req, res) => {
  const { userName, comment, adId } = req.body;
  const newComment = new Comment({
    userName: userName,
    comment: comment,
    adId: adId,
  });

  newComment.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      Advert.findById(adId, (err, post) => {
        post.comments.push(result);
        post.save();
      });
    }
  });

  res.status(201).send({ message: "Appointment created" });
});
router.get("/:id", (req, res) => {
  const id = req.params["id"].substring(1);
  Advert.findById(id)
    .populate("comments")
    .exec(function (err, post) {
      console.log(post);
      res.send(post);
    });
});

module.exports = router;
