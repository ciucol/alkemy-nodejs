const store = require('./store')
const bcryptjs = require('bcryptjs')
const tokenGenerator = require('../../helpers/tokenGenerator')
const tokenValidators = require('../../helpers/tokenValidators')

const login = async ({ email: mail, password }) => {
  try {
    const tokenValidation = await tokenValidators(mail, password)
    if (tokenValidation) {
      throw new Error(tokenValidation)
    }
    const user = await store.login(mail)
    const token = await tokenGenerator(mail)
    return (
      {
        user,
        token
      }
    )
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const register = async ({ name, lastName, email, type, password }) => {
  try {
    const salt = bcryptjs.genSaltSync()
    const newUser = {
      name,
      lastName,
      email,
      type,
      password: bcryptjs.hashSync(password, salt)
    }
    const user = await store.register(newUser)
    const token = await tokenGenerator(email)
    return {
      user,
      token
    }
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  login,
  register
}
