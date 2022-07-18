const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Models
const Book = require('../modules/Book');
const User = require('../modules/User');

router.get('/new', function(req, res, next) {
  const book = new Book({
    title: req.body.name,
    author: req.body.author,
    count_page: req.body.count_page

  });

  book.save((err, data) => {
    if (err)
      res.json(err);

    res.json(data);
  });
});

router.post('/new2', function(req, res, next) {

  const user = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    phone: req.body.phone
  });

  user.save((err, data) => {
    if (err)
      res.json(err);

    res.json(data);
  });

  res.send("geldi")
});

router.delete('/delete', function(req, res, next) {
   /* Book.findByIdAndRemove(req.params.id, function(err, data) {
        if (err)
        res.json(err);

        res.json(data);
    });*/
/*
  Book.findOneAndRemove({published:true}, function(err, data) {
    res.json(data);
  })*/
  Book.remove({published:true}, function(err, data) {
    res.json(data);
  })

});

router.delete('/deleteAll', function(req, res, next) {

  Book.remove({published:true}, function(err, data) {
    res.json(data);
  })

});

router.get('/list', (req, res) => {
  Book.find({
  },  (err, data) => {
    res.json(data);
  });
});

module.exports = router;