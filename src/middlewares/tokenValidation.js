const jwt = require('jsonwebtoken')

const tokenValidation = (req, res, next) => {
  const token = req.header('x-token')
  !token && res.status(401).json({ msg: 'Without token' })
  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
    req.uid = uid
    next()
  } catch ({ message: error }) {
    console.log(error)
    res.status(401).json({
      msg: 'Invalid token'
    })
  }
}

module.exports = tokenValidation
