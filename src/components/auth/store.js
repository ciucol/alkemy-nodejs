const { User } = require('../../db')

const login = async (email) => {
  return User.findOne({ where: { email }, attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } })
}

const register = async (user) => {
  try {
    await User.create(user)
    return 'User created'
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  login,
  register
}
