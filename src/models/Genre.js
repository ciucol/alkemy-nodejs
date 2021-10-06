const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Genre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  })
}
