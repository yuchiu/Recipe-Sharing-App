<template>
  <panel title="recipes">        
    <v-btn 
      slot="action" 
      :to="{name: 'recipes-create'}"
      fab light medium absolute right middle 
      class="orange lighten-3">
        <v-icon>add</v-icon>
    </v-btn>
    <div 
      class="recipe"
      v-for="recipe in recipes" 
      :key="recipe.id">
      <v-layout>
        <v-flex xs6>
          <div class="recipe-title">
            {{recipe.title}}
          </div>
          <div class="recipe-category">
          {{recipe.category}}
          </div>
          <v-btn
            class="orange lighten-3"
            :to="{
              name:'recipe', 
              params:{
                recipeId: recipe.id
              }
            }">
            View
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="recipe-image" :src="recipe.imageUrl"/>
        </v-flex>
      </v-layout>
    </div>
  </panel>
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
.recipe{
    padding: 20px;
    height:200px;
    overflow: hidden;
}
.recipe-title{
    font-size: 30px;
}
.recipe-category{
    font-size: 24px;
}
.recipe-image{
  width: 60%;
  margin: 0 auto;
}
</style>
