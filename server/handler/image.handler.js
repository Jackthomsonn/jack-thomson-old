const fs = require('fs')

const handleImageUpload = (req, res, next) => {
  if (req.body.image) {
    const data = req.body.image.replace(/^data:image\/\w+;base64,/, '')
    const buffer = new Buffer(data, 'base64')
    const index = new Date().getTime()

    fs.writeFile('./server/uploads/images/image-' + index + '.png', buffer)
    req.body.imageLocation = 'uploads/images/image-' + index + '.png'

    delete req.body.image

    next()
  } else {
    res.status(500).send({
      dev_message: 'image upload error',
      user_message: 'Error when uploading the image',
      status: 500
    })
  }
}

module.exports = handleImageUpload