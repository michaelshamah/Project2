const router = require('express').Router();



router.get('/', function(req, res){
  res.render('search', {user: req.session.user})
});


module.exports= router
