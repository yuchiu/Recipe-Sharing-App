<template>
  <div
      class="recipe-list-container">        
    <v-btn 
      slot="action" 
      :to="{name: 'recipes-create'}"
      fab light medium absolute right middle 
      class="deep-orange lighten-2"dark>
        <v-icon>add</v-icon>
    </v-btn>
    <div 
      class="recipe-container"
      v-for="recipe in recipes" 
      :key="recipe.id">
          <img class="recipe-image" :src="recipe.imageUrl"/>
          <div class="recipe-title">
            {{recipe.title}}
          </div>
          <div class="recipe-category">
          {{recipe.category}}
          </div>
          <v-btn
            class="deep-orange lighten-2" dark
            :to="{
              name:'recipe', 
              params:{
                recipeId: recipe.id
              }
            }">
            View
          </v-btn>
    </div>
  </div>
</template>

<script>
import RecipesService from '@/services/RecipesService'

export default {
  data(){
    return {
      recipes: null
    }
  },
  watch:{
    '$route.query.search':{
      immediate: true,
      async handler(value){
        this.recipes = (await RecipesService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.recipe-list-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 78vw;
}
.recipe-container{
    text-align: center;
    max-width: 700px;
    max-height: 600px;
    margin: 5px;
}
.recipe-title{
    color:#888;
    font-size: 24px;
}
.recipe-category{
    color:#888;
    font-size: 18px;
}
.recipe-image{
  max-width:700px;
  max-height:300px;
}
</style>
