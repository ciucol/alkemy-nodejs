const store = require('./store')

const listCharacter = (store.listCharacter)

const newCharacter = (newCharacter, userId) => store.newCharacter(newCharacter, userId)

const updateCharacter = (infoCharacter, characterId) => store.updateCharacter(infoCharacter, characterId)

const deleteCharacter = (characterId) => store.deleteCharacter(characterId)

module.exports = {
  listCharacter,
  newCharacter,
  updateCharacter,
  deleteCharacter
}
