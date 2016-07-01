var request = require('request');

function tickets(req, res, next){
  let type= req.query.searchType;
  let text= req.query.searchText;

  request({
    url: 'https://app.ticketmaster.com/discovery/v2/events.json',
    method: 'get',
    qs:{
      keyword: text,
      apikey: 'e4ORKgtsgbtLZOPFkw2b4DnDU6EP3mfO'
    }
  }, (err, response, data)=>{
    if ( err ) throw err
    res.concerts= JSON.parse(data)
    // console.log(res.concerts['_embedded'].events[0].name)
    next()
  })
}

module.exports= {tickets}
