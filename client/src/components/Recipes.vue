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

      <div v-for="recipe in recipes" :key="recipe.id">
      {{recipe.title}}-
      {{recipe.category}}
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

</style>
