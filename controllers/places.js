const router = require('express').Router()
const places = require('../models/places')

router.post('/', (req, res) => {
  if(!req.body.pic) {
    req.body.pic = 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
  if(!req.body.city) {
    req.body.city = 'Anytown'
  }
  if(!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {     
    res.render('places/index', {places})
})

module.exports = router