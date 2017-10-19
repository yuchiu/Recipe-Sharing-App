const {History, Recipe, User} = require('../models')
const _ = require('lodash')

module.exports = {
  async index(req, res) {
      try {
          const {userId} = req.query
          const histories = await History.findAll({
              where: {
                  UserId: userId
              },
              include:[
                  {
                      model: Recipe
                  }
              ]
          }).map(history=> history.toJSON())
              .map(history=> _.extend(
                {}, 
                history.Recipe, 
                history
              ))
              res.send(histories)
      } catch (err){
          res.status(500).send({
              error: `error occured trying to fetch the history`
          })
      }
  },
  async post (req, res) {
    try {
      const {recipeId, userId} = req.body
      const history = await History.create({
          RecipeId: recipeId,
          UserId: userId
      })
      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the history'
      })
    }
  }
}