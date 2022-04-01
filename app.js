const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const flash = require('connect-flash')
//const createError = require('http-errors')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(flash())

require('./controller/currency-rate.js')(app)

//app.use(function(req, res, next) {
//    next(createError(404));
//})
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(4006)