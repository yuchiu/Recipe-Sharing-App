import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Signin from '@/components/Signin'
import Recipes from '@/components/Recipes'
import CreateRecipe from '@/components/CreateRecipe'
import ViewRecipe from '@/components/ViewRecipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/recipes/create',
      name: 'recipes-create',
      component: CreateRecipe
    },
    {
      path: '/recipes/:recipeId',
      name: 'recipe',
      component: ViewRecipe
    }
  ]
})
