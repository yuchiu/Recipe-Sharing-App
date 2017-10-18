const {Bookmark} = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const recipeId = req.query.recipeId
            const userId = req.query.userId
            const bookmark = await Bookmark.findOne({
                where:{
                    RecipeId : recipeId,
                    UserId : userId
                }
            })
            res.send(bookmark)
        } catch (err){
            res.status(500).send({
                error: `error occured trying to fetch the bookmark`
            })
        }
    },
        async post (req, res) {
          try {
            const {recipeId, userId} = req.body
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
            const {bookmarkId} = req.params
            const bookmark = await Bookmark.findById(bookmarkId)
            await bookmark.destroy()
            res.send(bookmark)
          } catch (err) {
            res.status(500).send({
              error: 'an error has occured trying to delete the bookmark'
            })
          }
        },
}