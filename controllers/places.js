const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restaurant1.jpg',
        credit: `Photo by <a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        `
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/restaurant2.jpg',
        credit: `Photo by <a href="https://unsplash.com/@shawnanggg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">shawnanggg</a> on <a href="https://unsplash.com/photos/brown-and-gray-concrete-store-nmpW_WwwVSc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        `
      }]      
    res.render('places/index', {places})
})

module.exports = router