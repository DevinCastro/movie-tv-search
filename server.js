const express = require('express')
const { join } = require('path')

const app = express()


// NO EXPRESS.STATIC MIDDLEWARE WHEN USING REACT
// this is only used for when we are using heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'client', 'build')))
}

// other middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.use(require('./routes'))
// this is our catch all, only needed for production
if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(joi(__dirname, 'client', 'build', 'index.html'))
  })
}


require('./db')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.log(err))