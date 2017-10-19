<template>
  <v-layout>
    <v-flex xs6>
      <search class ="mb-2 mr-2"/>
      <recipes class ="mr-2"/>
    </v-flex>
    <v-flex xs6>
      <recipes-bookmarks/>
      <recent-viewed class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import Recipes from './Recipes'
import Search from './Search'
import RecipesBookmarks from './RecipesBookmarks'
import RecentViewed from './RecentViewed'
import RecipesService from '@/services/RecipesService'

export default {
  components:{
    Recipes,
    Search,
    RecipesBookmarks,
    RecentViewed
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
