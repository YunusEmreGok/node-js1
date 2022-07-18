const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../modules/User');

router.post('/new', function(req, res, next) {


  console.log('username:', req.body.username);
  console.log('password:', req.body.password);
  console.log('name:', req.body.name);
  console.log('phone:', req.body.phone);

  const user = new User({
    username: req.body.username,
  });

  user.save((err, data) => {
    if (err)
      res.json(err);

    res.json(data);
  });

  res.send("geldi")
});



router.get('/list', (req, res) => {
  User.find({
    category: {
      $exists: true
    }
  }, 'title comments category', (err, data) => {
    res.json(data);
  });
});

module.exports = router;
