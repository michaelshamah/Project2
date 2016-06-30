const { MongoClient } = require('mongodb');
var request = require('request');
const dbConnection = 'mongodb://localhost:27017/spotify';
// const key= " Bearer BQD5f6pVLf6P070XlmIs_XyfCYQE9y8qe3IWrZohUdGrrO8bkv94yAyZJI12BHo9bbPjLwXA6QImBwJf3fDvOtcBU0edVUjo5sz2zYQbibKY8Kh4ukWyqUg01WdKI31c3Vc2VBBHcAYSyuyJrkCtULcSdAkcxyPmOQZAQp6lMfEpI90rduyro9-Oqkb8ZMlZKenAmWk7C94Sjgy58bU5p7QWZO6Gx-OL4PICZItTxpVqRYum9rTncCnjdzSfAO_5BERwg_-Q5-T8Aob66ge7qOD98A0KW1pCTF0A91LzSw2FRFAMgGBb10QY"

function artist(req, res, next){
  request("https://api.spotify.com/v1/search?q=script+&type=artist", function (error, artist) {
res.artist= artist
  next()
  })
}
 module.exports= {artist}
