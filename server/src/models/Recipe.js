module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        title: DataTypes.STRING,
        category: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
        youtubeId: DataTypes.STRING,
        ingredients: DataTypes.TEXT,
        preparation: DataTypes.TEXT
    })
    return Recipe
}