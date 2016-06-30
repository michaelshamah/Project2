
const router = require('express').Router();
const songsService = require('../models/spotify')
router.get('/', songsService.artist, function(req, res){
  var artist= JSON.parse(res.artist.body)
  var names=artist.artists.items
  console.log(names)
  res.render('user', {names: names})
});

module.exports= router
