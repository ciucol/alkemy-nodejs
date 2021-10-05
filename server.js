const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('colors')
const { api } = require('./config')
const { port, host } = api

const server = express()

server.use(express.json())
server.use(morgan('dev'))
server.use(cors)

server.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`)
})
