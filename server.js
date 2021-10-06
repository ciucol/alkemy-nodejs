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
server.use(cors())
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

routes(server)

server.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`)
})
