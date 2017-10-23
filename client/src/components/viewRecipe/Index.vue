<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <recipe-desc :recipe= "recipe"/>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <youtube :youtubeId="recipe.youtubeId"/>
      </v-flex>
      
    </v-layout>

    <v-layout>

      <v-flex xs6 class="ml-2 mt-2">
        <ingredients :ingredients="recipe.ingredients"/>
      </v-flex>
      <v-flex xs6 class="ml-2 mt-2">
        <preparation :preparation="recipe.preparation"/>
      </v-flex>
    </v-layout>


  </div>
</template>

<script>
import RecipesService from '@/services/RecipesService'
import RecipeRecentsService from '@/services/RecipeRecentsService'
import RecipeDesc from './RecipeDesc'
import Youtube from './Youtube'
import Ingredients from './Ingredients'
import Preparation from './Preparation'
import {mapState} from 'vuex'

export default {
  components: {
    RecipeDesc,
    Youtube,
    Preparation,
    Ingredients
  },
  data(){
    return {
      recipe: {}
    }
  },
  computed:{
      ...mapState([
          'isUserLoggedIn',
          'user',
          'route'
      ])
  },
  async mounted(){
    const recipeId = this.route.params.recipeId
    this.recipe = (await RecipesService.show(recipeId)).data
    if(this.isUserLoggedIn){
      RecipeRecentsService.post({
        recipeId: recipeId
      })
    }
  }
}
</script>

<style scoped>
textarea{
  width:90%;
  font-family: monospace;
  border: none;
  height: 500px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>