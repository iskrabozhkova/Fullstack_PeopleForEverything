const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/:id", (req, res) => {
  const id = req.params["id"].substring(1);
  console.log(id);
  User.findOne({ _id: id }, function (err, u) {
    res.send(u);
  });
});
router.put("/:id", (req, res) => {
  const id = req.params["id"].substring(1);
  console.log(req.body);
  User.findOneAndUpdate(
    id,
    skills,
    { upsert: true },
    function (err, addedSkills) {
      if (err) return res.send(500, { error: err });
      return res.send(addedSkills);
    }
  );
});

module.exports = router;
