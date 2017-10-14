const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const RecipesController = require('./controllers/RecipesController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register, //call auth policy middleware
        AuthenticationController.register
    ),
    app.post('/signin',
        AuthenticationController.signin
    ),
    app.get('/recipes',
        RecipesController.index
    ),
    app.post('/recipes',
        RecipesController.post
    )
}