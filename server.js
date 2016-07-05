const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser')
const path       = require('path');
const mongodb    = require('mongodb')
const session        = require('express-session')
const methodOverride = require('method-override')
const fs         = ('fs')
const searchRoute      = require('./controllers/search')
const apiRouter     = require('./controllers/api')
const userRouter     = require('./controllers/user')
const app        = express()
const PORT       = process.env.PORT || 3000


app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'sooopersekret',
  cookies: {maxAge: 60000}
}))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')))
app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', searchRoute)
app.use('/api', apiRouter)
app.use('/user', userRouter)

app.listen(PORT, function(){
  console.log('server is listening on ', PORT)
})

