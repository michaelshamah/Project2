
const router = require('express').Router();
const songsService = require('../models/spotify')

  router.get('/search', songsService.select, function(req, res){

    if (req.query.searchType=== 'artist'){
      var artist= res.thing
      var names=artist.artists.items
      res.render('artists', {names: names})

    } else if (req.query.searchType=== 'track'){
      var songs =res.thing
      songs=songs.tracks.items
      res.render('songs', {songs: songs})

    } else if (req.query.searchType=== 'album'){
      var albums =res.thing
      albums =albums.albums.items
      res.render('albums', {albums: albums})
    } else{
      res.send('nothing found')
    }
});


module.exports= router

