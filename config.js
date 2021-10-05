require('dotenv').config()

module.exports = {
  api: {
    port: process.env.API_PORT,
    host: process.env.API_HOST
  },
  db: {
    user: process.env.API_USER,
    pass: process.env.API_PASS,
    name: process.env.API_NAME,
    port: process.env.API_PORT
  }
}
