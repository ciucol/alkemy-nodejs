exports.sucess = (req, res, status, message) => {
  res.status(status).json(message)
}

exports.error = (req, res, status, message, details) => {
  console.log(details)
  res.status(status).json(message)
}
