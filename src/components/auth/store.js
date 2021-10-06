const { User } = require('../../db')

const newUser = async (user) => {
  try {
    return await User.create(user)
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  newUser
}
