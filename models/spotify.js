// const { MongoClient } = require('mongodb');
var request = require('request');
// const dbConnection = 'mongodb://localhost:27017/spotify';
// const key= " Bearer BQD5f6pVLf6P070XlmIs_XyfCYQE9y8qe3IWrZohUdGrrO8bkv94yAyZJI12BHo9bbPjLwXA6QImBwJf3fDvOtcBU0edVUjo5sz2zYQbibKY8Kh4ukWyqUg01WdKI31c3Vc2VBBHcAYSyuyJrkCtULcSdAkcxyPmOQZAQp6lMfEpI90rduyro9-Oqkb8ZMlZKenAmWk7C94Sjgy58bU5p7QWZO6Gx-OL4PICZItTxpVqRYum9rTncCnjdzSfAO_5BERwg_-Q5-T8Aob66ge7qOD98A0KW1pCTF0A91LzSw2FRFAMgGBb10QY"

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


  // let url= 'https://api.spotify.com/v1/search?q='+text+'&type='+type
  // if (type=== 'artist'){
  //   request(url, function (error, artist) {
  //     res.artist= artist
  //     next()
  //   })
  // } else if (type=== 'track'){
  //   request(url, function (error, song) {
  //     console.log(url)
  //     res.song= song
  //     console.log(song)
  //     next()
  //   })
  // } else if (type ==='album'){
  //   request(url, function (error, record) {
  //     res.record= record
  //     next()
  //   })
  // }
}
 module.exports= {select}









