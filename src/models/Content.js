const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Content', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    creationDate: {
      type: DataTypes.DATE
    },
    rating: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  })
}
