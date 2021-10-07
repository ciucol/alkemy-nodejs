const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../routes/response')
const validation = require('../../middlewares/validation')
const tokenValidation = require('../../middlewares/tokenValidation')

router.get('/', (req, res) => {
  controller
    .function()
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Message'))
})

router.post('/', [
  tokenValidation,
  validation
], (req, res) => {
  controller
    .newCharacter(req.body, req.uid)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Message'))
})

router.put('/', (req, res) => {
  controller
    .function()
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Message'))
})

router.delete('/', (req, res) => {
  controller
    .function()
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e, 'Message'))
})

module.exports = router
