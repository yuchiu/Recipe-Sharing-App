import Api from '@/services/Api'

export default {
    index () {
        return Api().get('recipes')
    },
    post (recipe) {
        return Api().post('recipes', recipe)
    }
}
