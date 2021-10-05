const { Sequelize } = require('sequelize')
const { db } = require('../../config')
const { user, pass, name, host, port } = db
const CharacterModel = require('../models/Character')
const ContentModel = require('../models/Content')
const GenreModel = require('../models/Genre')
const UserModel = require('../models/User')

const sequelize = new Sequelize(`postgres://${user}:${pass}@${host}:${port}/${name}`, { logging: false })

const Character = CharacterModel(sequelize)
const Content = ContentModel(sequelize)
const Genre = GenreModel(sequelize)
const User = UserModel(sequelize)

User.hasMany(Character)
Character.belongsTo(User)

Genre.hasMany(Content)
Content.belongsTo(Content)

Character.belongsToMany(Content, { throwgh: 'character_content' })
Content.belongsToMany(Character, { throwgh: 'character_content' })

sequelize.sync({ alter: true })
  .then(async () => {
    try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully')
    } catch (error) {
      console.error('Unable to connect to the database')
    }
  })
