const { validationPassword } = require('./dbValidators')

const tokenValidators = async (email, password) => {
  const responseValidationPassword = await validationPassword(email, password)
  if (responseValidationPassword) return responseValidationPassword
  return false
}

module.exports = tokenValidators
