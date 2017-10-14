<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <panel title="recipes">
      <div v-for="recipe in recipes" :key="recipe.title">
      {{recipe.title}}
      {{recipe.category}}
      </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Globals/Panel'
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
  async mounted(){
    this.songs = await RecipesService.index()
  }
}
</script>

<style scoped>

</style>
