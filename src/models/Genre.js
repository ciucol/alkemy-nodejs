const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Character', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  })
}
