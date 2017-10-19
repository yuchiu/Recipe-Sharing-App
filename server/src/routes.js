const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const RecipesController = require('./controllers/RecipesController')
const BookmarksController = require('./controllers/BookmarksController')
const RecentsController = require('./controllers/RecentsController')

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
        BookmarksController.index
    ),    
    app.post('/bookmarks',
        BookmarksController.post
    ),    
    app.delete('/bookmarks/:bookmarkId',
        BookmarksController.delete
    ),    
    app.get('/recents',
        RecentsController.index
    ),    
    app.post('/recents',
        RecentsController.post
    )
}