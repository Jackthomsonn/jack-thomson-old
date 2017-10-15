const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/images/:id', (req, res) => {
  const image = fs.readFileSync(__dirname + '/../uploads/images/' + req.params.id)

  res.writeHead(200, { 'Content-Type': 'image/png' })
  res.end(image, 'binary')
})

module.exports = router