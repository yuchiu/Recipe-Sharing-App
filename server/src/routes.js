const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const RecipesController = require('./controllers/RecipesController')
const BookmarksController = require('./controllers/BookmarksController')
const RecentsController = require('./controllers/RecentsController')
const isAuthenticated = require('./policies/isAuthenticated')

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
    ),    
    app.get('/recipes/:recipeId',
        RecipesController.show
    ),    
    app.put('/recipes/:recipeId',
        RecipesController.put
    ),    

    app.get('/bookmarks',
        isAuthenticated,
        BookmarksController.index
    ),    
    app.post('/bookmarks',
        isAuthenticated,
        BookmarksController.post
    ),    
    app.delete('/bookmarks/:bookmarkId',
        isAuthenticated,
        BookmarksController.delete
    ),   

    app.get('/recents',
        isAuthenticated,
        RecentsController.index
    ),    
    app.post('/recents',
        isAuthenticated,
        RecentsController.post
    )
}