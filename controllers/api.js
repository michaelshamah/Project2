
const router = require('express').Router();
const songsService = require('../models/spotify')
const ticketService= require('../models/tickets')

  router.get('/search', songsService.select, ticketService.tickets, function(req, res){

    if (req.query.searchType=== 'artist'){
      var artist= res.thing
      var names=artist.artists.items
      res.render('artists', {names: names, user: req.session.user})

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

