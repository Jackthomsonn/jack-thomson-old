const jwt = require('jsonwebtoken')
const env = require('../env')

const checkAuthentication = (req, res, next) => {
  const bearerHeader = req.headers["authorization"]

  if (typeof bearerHeader !== 'undefined' && bearerHeader !== '') {
    const bearer = bearerHeader.split(" ")

    req.token = bearer[1]

    jwt.verify(req.token, env.AUTH_SECRET_KEY, (err, data) => {
      if (err) {
        res.status(403).send({
          user_message: 'User is forbidden to make that request',
          dev_message: 'forbidden',
          status: 403
        })
      } else {
        next();
      }
    })
  } else {
    res.status(403).send({
      user_message: 'No authorization header was supplied with this request',
      dev_message: 'forbidden',
      status: 403
    })
  }
}

const signToken = (user) => {
  return jwt.sign({
    user: user.username,
    _id: user._id
  }, env.AUTH_SECRET_KEY)
}

module.exports = {
  checkAuthentication: checkAuthentication,
  signToken: signToken
}