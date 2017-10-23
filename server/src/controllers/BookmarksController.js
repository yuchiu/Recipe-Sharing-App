const {Bookmark, Recipe, User} = require('../models')
const _ = require('lodash')
module.exports = {
  async index(req, res) {
      try {
          const userId = req.user.id
          const {recipeId} = req.query
          const where = {
              UserId : userId
          }
          if(recipeId){
              where.RecipeId= recipeId
          }
          const bookmarks = await Bookmark.findAll({
              where: where,
              include:[
                  {
                      model: Recipe
                  }
              ]
          }).map(bookmark=> bookmark.toJSON())
              .map(bookmark=> _.extend(
                {}, 
                bookmark.Recipe, 
                bookmark
              ))
              res.send(bookmarks)
      } catch (err){
          res.status(500).send({
              error: `error occured trying to fetch the bookmark`
          })
      }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {recipeId} = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          RecipeId: recipeId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }
      const newBookmark = await Bookmark.create({
        
        RecipeId : recipeId,
        UserId : userId
      })
      
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const userId = req.user.id
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findOne({
        where:{
          id: bookmarkId,
          UserId: userId
        }
      })
      if(!bookmark){
        return res.status(403).send({
          error: 'you do not have access to this bookmark'
        })
      }
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  }
}