require('dotenv').config()

module.exports = {
  api: {
    port: process.env.API_PORT,
    host: process.env.API_HOST
  },
  db: {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
}
