const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('colors')
const routes = require('./src/routes/routes')
const { api } = require('./config')
const { port, host } = api

const server = express()

server.use(express.json())
server.use(morgan('dev'))
server.use(cors)

routes(server)

server.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`)
})
