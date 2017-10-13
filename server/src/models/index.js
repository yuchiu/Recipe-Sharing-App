const fs = require('fs')
const path = require('path')

const Sequelize = require('sequelize')//ORM for connecting to database
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

//helper function for easily add new model, read all files that's not index.js.
fs
    .readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db