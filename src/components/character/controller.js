const store = require('./store')

const listCharacter = (store.listCharacter)

const newCharacter = (newCharacter, userId) => store.newCharacter(newCharacter, userId)

module.exports = {
  listCharacter,
  newCharacter
}
