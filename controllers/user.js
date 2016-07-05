const router = require('express').Router();
const { createUser, loginUser } = require('../models/user');

router.get('/new', function(req,res) {
  res.render('/user/new', {user: req.session.user});
});

router.post('/new', createUser, function(req,res) {
  console.log(req.body);
  res.redirect('/login', {user: req.session.user});
});

router.get('/login', function(req,res) {
  res.render('/user/login', {user: req.session.user});
});

router.post('/login', loginUser, function(req,res) {
  console.log('hello')
  console.log(res.user);
  req.session.user = res.user;

  req.session.save(function(err) {
    if(err) throw err;
    res.redirect('/', {user: req.session.user});
  });
});

router.delete('/logout', function(req,res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

module.exports = router;
