const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  locality: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    default: '€',
    enum: ['€', '€€', '€€€'],
  },
  rating: {
    type: Number,
    default: 1,
    enum: [1, 2, 3, 4, 5],
  },
  phone: {
    type: String,
    required: false
  },
  imageUrl: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)
