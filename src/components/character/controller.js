const store = require('./store')

const listCharacter = (store.listCharacter)

const newCharacter = (newCharacter, userId) => store.newCharacter(newCharacter, userId)

const deleteCharacter = (characterId) => store.deleteCharacter(characterId)

module.exports = {
  listCharacter,
  newCharacter,
  deleteCharacter
}
