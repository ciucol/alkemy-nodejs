exports.success = (req, res, status, message) => {
  res.status(status).json(message)
}

exports.error = (req, res, status, error) => {
  console.log(error.message.bgBrightRed)
  res.status(status).json(error.message)
}
