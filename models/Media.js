const { model, Schema } = require('mongoose')

const Media = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  imdbID: {
    type: String,
    unique: true,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    unique: true,
    required: true
  }
}, { timestamps: true })

module.exports = model('Media', Media)