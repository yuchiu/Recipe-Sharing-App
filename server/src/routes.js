const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register, //call auth policy middleware
        AuthenticationController.register
    ),
    app.post('/signin',
        AuthenticationController.signin
    )
}