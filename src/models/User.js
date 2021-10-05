const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Character', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM({
        values: ['User', 'Admin']
      }),
      allowNull: false,
      defaultValue: 'User'
    }
  })
}
