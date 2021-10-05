const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Character', {
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
      type: DataTypes.ENUM({
        values: ['1', '2', '3', '4', '5']
      })
    },
    type: {
      type: DataTypes.ENUM({
        values: ['Movie', 'Tv Show']
      })
    }
  })
}
