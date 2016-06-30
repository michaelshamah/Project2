const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser')
const path       = require('path');
const mongodb    = require('mongodb')
const session        = require('express-session')
const methodOverride = require('method-override')
const fs         = ('fs')
const homeRoute      = require('./controllers/home')
const userRouter     = require('./controllers/user')
const app        = express()
const PORT       = process.env.PORT || 3000
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'));
app.use(bodyParser.json())

// app.use('/', homeRoute)
app.use('/user', userRouter)

app.listen(PORT, function(){
  console.log('server is listening on ', PORT)
})
