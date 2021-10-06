const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../routes/response')

// router.get('/', (req, res) => {
//   controller
//     .function()
//     .then(message => response.success(req, res, 201, message))
//     .catch(e => response.error(req, res, 404, e, 'Message'))
// })

router.post('/', (req, res) => {
  controller
    .newUser(req.body)
    .then(message => response.success(req, res, 201, message))
    .catch(e => response.error(req, res, 404, e))
})

module.exports = router
