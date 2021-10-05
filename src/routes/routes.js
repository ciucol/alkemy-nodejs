const authNetwork = require('../components/auth/network')
const charactersNetwork = require('../components/character/network')
const moviesNetwork = require('../components/movie/network')
const genresNetwork = require('../components/genre/network')

const auth = '/auth'
const characters = '/characters'
const movies = '/movies'
const genres = '/genres'

const routes = (server) => {
  server.use(auth, authNetwork)
  server.use(characters, charactersNetwork)
  server.use(movies, moviesNetwork)
  server.use(genres, genresNetwork)
}

module.exports = routes
