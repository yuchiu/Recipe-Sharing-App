module.exports = {
    port: process.env.PORT || 8081,
    db:{
        database: process.env.DB_NAME || 'recipeApp',
        user: process.env.DB_USER || 'recipeApp',
        password: process.env.DB_PASS || 'recipeApp',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './recipeApp.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}