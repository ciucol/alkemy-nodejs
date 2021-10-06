const store = require('./store')
const bcryptjs = require('bcryptjs')

const newUser = async (user) => {
  try {
    const salt = bcryptjs.genSaltSync()
    const newUser = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      type: user.type,
      password: bcryptjs.hashSync(user.password, salt)
    }
    const { name, lastName, email, type } = await store.newUser(newUser)
    return {
      name,
      lastName,
      email,
      type
    }
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  newUser
}
