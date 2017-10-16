import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('recipes',{
            params:{
                search: search
            }
        })
    },
    post (recipe) {
        return Api().post('recipes', recipe)
    },
    show(recipeId){
        return Api().get(`recipes/${recipeId}`)
    },
    put(recipe) {
        return Api().put(`recipes/${recipe.id}`, recipe)
    }
}
