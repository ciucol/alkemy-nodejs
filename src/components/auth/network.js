const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const controller = require('./controller')
const response = require('../../routes/response')
const validation = require('../../middlewares/validation')
const { validationEmail } = require('../../helpers/dbValidators')

router.get('/login', [
  check('email', 'Mail is required').notEmpty(),
  check('email', 'Mail is validate').isEmail(),
  check('password', 'Password is required and must be more than 6 letters').isLength({ min: 6 }).notEmpty(),
  validation
], (req, res) => {
  controller
    .login(req.body)
    .then(({ user, token }) => {
      res.cookie('x-token', token, { maxAge: 900000, httpOnly: true })
      response.success(req, res, 201, user)
    })
    .catch(e => response.error(req, res, 404, e, 'Message'))
})

router.post('/register', [
  check('email', 'Mail is required').notEmpty(),
  check('email', 'Mail is validate').isEmail(),
  check('password', 'Password is required and must be more than 6 letters').isLength({ min: 6 }).notEmpty(),
  check('email', 'email exist').custom(validationEmail),
  validation
], (req, res) => {
  controller
    .register(req.body)
    .then(({ user, token }) => {
      res.cookie('x-token', token, { maxAge: 900000, httpOnly: true })
      response.success(req, res, 201, user)
    })
    .catch(e => response.error(req, res, 404, e))
})

module.exports = router
