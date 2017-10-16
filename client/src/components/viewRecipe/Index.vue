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
import RecipeDesc from './RecipeDesc'
import Youtube from './Youtube'
import Ingredients from './Ingredients'
import Preparation from './Preparation'

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
  async mounted(){
    const recipeId = this.$store.state.route.params.recipeId
    this.recipe = (await RecipesService.show(recipeId)).data
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