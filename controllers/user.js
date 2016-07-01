
const router = require('express').Router();
const songsService = require('../models/spotify')

  router.get('/artists', songsService.select, function(req, res){

    if (req.query.searchType=== 'artist'){
      var artist= JSON.parse(res.artist.body)
      var names=artist.artists.items
      res.render('artists', {names: names})

    } else if (req.query.searchType=== 'track'){
      var songs =JSON.parse(res.song.body)
      console.log(songs)
      songs=songs.tracks.items
      res.render('songs', {songs: songs})

    } else if (req.query.searchType=== 'album'){
      var albums =JSON.parse(res.record.body)
      albums =albums.albums.items
      res.render('albums', {albums: albums})
    }
});


module.exports= router


//   router.get('/songs', songsService.song, function(req, res){
//     var songs =JSON.parse(res.song.body)
//     songs=songs.tracks.items
//     res.render('songs', {songs: songs})
// })




//   router.get('/albums', songsService.album, function(req, res){
//     console.log(res.record)
//     var albums =JSON.parse(res.record.body)
//     albums =albums.albums.items
//     res.render('albums', {albums: albums})
//   })

