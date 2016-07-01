const router = require('express').Router();
const {createUser, loginUser} = require('../models/user')
router.get('/new', function(req, res){
  res.render('user/new', {user: req.session.user});
});

router.post('/new', createUser, function(req, res){
  res.redirect('/search', {user: req.session.user})
});
router.get('/login', function(req, res){
  res.render('user/login', {user: req.session.user});
});

router.post('/login', loginUser, function(req, res){
  req.session.user = res.user
  req.session.save(function (err){
    res.redirect('/');
  });
});

router.delete('/logout', function(req, res){
  req.session.destroy(function(err){
    res.redirect('/');
  });
})
router.get('/logout', function(req, res){
  req.session.destroy(function(err){
    res.redirect('/');
  });
})
module.exports = router;
