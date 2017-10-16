const {Recipe} = require('../models')
const config = require('../config/config')

module.exports = {
    async index(req, res) {
        try {
            const recipe = await Recipe.findAll({
                limit:10
            })
            res.send(recipe.reverse())
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
    },
    async show(req, res) {
        try {
            const recipe = await Recipe.findById(req.params.recipeId)
            res.send(recipe)
        } catch (err){
            res.status(500).send({
                error: `error occured trying to fetch the recipe by Id`
            })
        }
    },
    async put(req, res) {
        try {
            const recipe = await Recipe.update(req.body,{
                where: {
                    id: req.params.recipeId
                }
            })
            res.send(req.body)
        } catch (err){
            res.status(500).send({
                error: `error occured trying to update the recipe by Id`
            })
        }
    }
}