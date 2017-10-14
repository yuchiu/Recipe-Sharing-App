const {Recipe} = require('../models')
const config = require('../config/config')

module.exports = {
    async index(req, res) {
        try {
            const recipe = await Recipe.findAll({
                limit:10
            })
            res.send(recipe)
        } catch (err){
            res.status(500).send({
                error: `error occured trying to fetch the recipes`
            })
        }
    },
    async post(req, res) {
        try {
            const recipe = await Recipe.create(req.body)
            res.send(recipe)
        } catch (err){
            res.status(500).send({
                error: `error occured trying to create the recipe`
            })
        }
    }
}