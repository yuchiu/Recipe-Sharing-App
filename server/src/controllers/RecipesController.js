const {Recipe} = require('../models')
const config = require('../config/config')

module.exports = {
    async index(req, res) {
        try {
            let recipes= null
            const search = req.query.search
            if(search){
                recipes = await Recipe.findAll({
                    where:{
                        $or:[
                            'title', 'category'
                        ].map(key=>({
                            [key]: {
                                $like: `%${search}%`
                            }
                        }))
                    }
                })
            }else{
                recipes = await Recipe.findAll({
                    limit:20
                })
            }
            res.send(recipes.reverse())
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