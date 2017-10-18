<template>
  <v-layout>
    <v-flex xs6>
      <search class ="mb-2 mr-2"/>
      <recipes class ="mr-2"/>
    </v-flex>
    <v-flex xs6>
      <recipes-bookmarks/>
    </v-flex>
  </v-layout>
</template>

<script>
import Recipes from './Recipes'
import Search from './Search'
import RecipesBookmarks from './RecipesBookmarks'
import RecipesService from '@/services/RecipesService'

export default {
  components:{
    Recipes,
    Search,
    RecipesBookmarks
  },
  data(){
    return {
      recipes: null
    }
  },
  async mounted(){
    this.recipes = (await RecipesService.index()).data
  }
}
</script>

<style scoped>
</style>
