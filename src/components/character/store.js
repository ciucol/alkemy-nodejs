const { Character, User } = require('../../db')

const listCharacter = async (newCharacter, userId) => {
  try {
    return Character.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } })
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const newCharacter = async ({ name, img, age, weight, story }, userId) => {
  try {
    const newCharacter = {
      name,
      img,
      age,
      weight,
      story
    }
    const user = await User.findByPk(userId)
    return await user.createCharacter(newCharacter)
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const updateCharacter = async (infoCharacter, characterId) => {
  try {
    const character = await Character.findByPk(characterId)
    for (const property in infoCharacter) {
      character[property] = infoCharacter[property]
    }
    return await character.save()
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const deleteCharacter = async (characterId) => {
  try {
    const userDelete = await Character.destroy({ where: { id: characterId } })
    if (userDelete) {
      return 'Character deleted'
    }
    throw new Error('Character not found')
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  listCharacter,
  newCharacter,
  updateCharacter,
  deleteCharacter
}
