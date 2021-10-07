const store = require('./store')

const newCharacter = (newCharacter, userId) => store.newCharacter(newCharacter, userId)

module.exports = {
  newCharacter
}
