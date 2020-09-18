const router = require('express').Router()
const { Media } = require('../models')


// GET all Medias
router.get('/media', (req, res) => {
  Media.find()
    .then(media => res.json(media))
    .catch(err => console.log(err))
})

// POST one Medias
router.post('/media', (req, res) => {
  Media.create(req.body)
    .then(media => res.json(media))
    .catch(err => console.log(err))
})

// PUT one Medias
router.put('/media/:id', (req, res) => {
  Media.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one Medias
router.delete('/media/:id', (req, res) => {
  Media.findByIdAndDelete(req.params.id)
    .then(media => media.remove())
    .then(media => res.json(media))
    .catch(err => console.log(err))
})

module.exports = router