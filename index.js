const express = require('express')
require('dotenv').config()
const app = express()

app.use('/places', require('./controllers/places'))

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render(`error404`)
})

app.listen(process.env.PORT, (req, res) => {
    console.log('I am running, chillllll')
})