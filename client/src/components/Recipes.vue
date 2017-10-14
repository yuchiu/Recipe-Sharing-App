<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <panel title="recipes">        
        <v-btn 
          slot="action" 
          @click="navigateTo({name: 'recipes-create'})"
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
                @click="navigateTo({
                  name:'recipe', 
                  params:{
                    recipeId: recipe.id
                  }
                })">
                View
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="recipe-image" :src="recipe.imageUrl"/>
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/globals/Panel'
import RecipesService from '@/services/RecipesService'

export default {
  components:{
    Panel
  },
  data(){
    return {
      recipes: null
    }
  },
  methods:{
    navigateTo(route){
      this.$router.push(route)
    }
  },
  async mounted(){
    this.recipes = (await RecipesService.index()).data
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
