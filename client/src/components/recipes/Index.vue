<template>
  <v-layout>
    <v-flex 
      :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
        }">
      <search class ="mb-2 mr-2"/>
      <recipes class ="mr-2"/>
    </v-flex>
    <v-flex xs6 v-if="isUserLoggedIn">
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
import {mapState} from 'vuex'

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
  computed:{
      ...mapState([
          'isUserLoggedIn'
      ])
  },
  async mounted(){
    this.recipes = (await RecipesService.index()).data
  }
}
</script>

<style scoped>
</style>
