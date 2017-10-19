const {sequelize, Recipe, User, Bookmark, History} = require('../src/models')
const Promise = require('bluebird')
const recipes = require('./recipes.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const histories = require('./histories.json')

sequelize.sync({force: true})
.then(async function (){
    await Promise.all(
        users.map( user => {
            User.create(user)
        })
    )
    await Promise.all(
        recipes.map(recipe=>{
            Recipe.create(recipe)
        })
    )
    await Promise.all(
        bookmarks.map(bookmark=>{
            Bookmark.create(bookmark)
        })
    )
    await Promise.all(
        histories.map(history=>{
            History.create(history)
        })
    )
})
