const {Recent, Recipe, User} = require('../models')
const _ = require('lodash')

module.exports = {
  async index(req, res) {
      try {
          const userId = req.user.id
          const recents = await Recent.findAll({
              where: {
                  UserId: userId
              },
              include:[
                  {
                      model: Recipe
                  }
              ]
          }).map(recent=> recent.toJSON())
              .map(recent=> _.extend(
                {}, 
                recent.Recipe, 
                recent
              ))
              res.send(_.uniqBy(recents, recent=>recent.RecipeId))
      } catch (err){
          res.status(500).send({
              error: `error occured trying to fetch the recent`
          })
      }
  },
  async post (req, res) {
    try {
      const {userId} = req.user.id
      const {recipeId} = req.body
      const recent = await Recent.create({
          RecipeId: recipeId,
          UserId: userId
      })
      res.send(recent)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the recent'
      })
    }
  }
}