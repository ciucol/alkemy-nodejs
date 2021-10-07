const { Character, User } = require('../../db')

const listCharacter = async (newCharacter, userId) => {
  try {
    const user = await User.findByPk(userId)
    const character = await user.createCharacter(newCharacter)
    console.log(character)
    return character
  } catch (error) {
    return error
  }
}
const newCharacter = async (newCharacter, userId) => {
  try {
    const user = await User.findByPk(userId)
    return await user.createCharacter(newCharacter)
  } catch (error) {
    return error
  }
}
const updateCharacter = async (newCharacter, userId) => {
  try {
    const user = await User.findByPk(userId)
    const character = await user.createCharacter(newCharacter)
    console.log(character)
    return character
  } catch (error) {
    return error
  }
}
const deleteCharacter = async (newCharacter, userId) => {
  try {
    const user = await User.findByPk(userId)
    const character = await user.createCharacter(newCharacter)
    console.log(character)
    return character
  } catch (error) {
    return error
  }
}

module.exports = {
  listCharacter,
  newCharacter,
  updateCharacter,
  deleteCharacter
}
