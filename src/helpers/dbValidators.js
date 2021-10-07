const bcryptjs = require('bcryptjs')
const { User } = require('../db')

const validationEmail = async (email) => {
  const emailExist = await User.findOne({ where: { email } })
  if (emailExist) {
    throw new Error(`email ${email} exist`)
  }
}

const validationPassword = async (email, password) => {
  const user = await User.findOne({ where: { email } })
  const userPassword = bcryptjs.compareSync(password, user.password)
  if (!userPassword) {
    return ('User and password not match')
  }
}

module.exports = {
  validationEmail,
  validationPassword
}
