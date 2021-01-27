const express = require('express')
const router = express.Router()

const Restaurant = require('../models/Restaurant')

//desc Login/Landin page
//@route get /
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ }).lean()
    res.render('home', {
      restaurants,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

module.exports = router