const { MongoClient } = require('mongodb');
const request = require('request');
const dbConnection = 'mongodb://localhost:27017/spotify_users';


function select(req, res, next){
  const type= req.query.searchType;
  const text= req.query.searchText;

  request({
    url: 'https://api.spotify.com/v1/search/',
    method: 'get',
    qs:{
      q: text,
      type: type,
    }
  }, (err, response, data)=>{
    if ( err ) throw err
    res.thing= JSON.parse(data)
    next()
  })
}

function favoriteAlbums(req,res,next){
    let albumInfo = {
    name: req.body.name,
    picture: req.body.picture
  }
  db.collections('albums').insertOne(albumInfo, function(err,result){
    if (err) throw err;
    next();
  })
}

function favoriteArtists(req,res,next){
  let artistInfo = {
    artist: req.body.artist,
    picture: req.body.picture
  }
  db.collections('artists').insertOne(artistInfo, function(err,result){
    if (err) throw err;
    next();
  })
}

function favoriteSongs(req,res,next){
  let songInfo= {
    song: req.body.song,
    artist: req.body.artist,
    picture: req.body.picture
  }
  db.collections('songs').insertOne(songsInfo, function(err,result){
    if (err) throw err;
    next();
  })
}

function favorites(req,res,next){
  if (req.query.searchType=== 'artist'){
    favoriteArtists()

  } else if (req.query.searchType=== 'track'){
    favoriteSongs()

  } else if (req.query.searchType=== 'album'){
    favoriteAlbums()
  }
  next()
}
 module.exports= {select, favorites}









