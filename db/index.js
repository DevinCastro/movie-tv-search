module.exports = require('mongoose').connect('mongodb://localhost/moviestv_db', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology:true
})


// process.env.MONGODB_URI || 