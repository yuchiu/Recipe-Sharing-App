<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <search class ="mb-2"/>
      <recipes/>
    </v-flex>
  </v-layout>
</template>

<script>
import Recipes from './Recipes'
import Search from './Search'
import RecipesService from '@/services/RecipesService'

export default {
  components:{
    Recipes,
    Search
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
</style>
