<template>
  <v-layout>
    <v-flex xs6 md4>
        <panel title="Recipe Metadata">
            <v-text-field  
                label="Title"
                required
                :rules="[rules.required]"
                v-model="recipe.title"
            ></v-text-field>
            <br/>
            <v-text-field
                label="Category"
                required
                :rules="[rules.required]"
                v-model="recipe.category"
            ></v-text-field>
            <br/>
            <v-text-field
                label="Image URL"
                required
                :rules="[rules.required]"
                v-model="recipe.imageUrl"
            ></v-text-field>
            <br/>
            <v-text-field
                label="Youtube Id"
                v-model="recipe.youtubeId"
            ></v-text-field>
            <br/>
        </panel>
    </v-flex>
    <v-flex xs6 md8 class="ml-3">
        <panel title="Preparation">
        <v-text-field
            multi-line
            label="Ingredients"
            v-model="recipe.ingredients"
        ></v-text-field>
        <br/>
        <v-text-field
            multi-line
            label="Preparation"
            v-model="recipe.preparation"
        ></v-text-field>
        </panel>
        <div 
            class="danger-alert" v-if="error">
            {{error}}
        </div>
        <v-btn
            dark
            class="red lighten-1"
            @click="save"
            >
            Save Recipe
        </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import RecipesService from '@/services/RecipesService'

export default {
    data(){
        return {
            recipe:{            
                title: null,
                category: null,
                imageUrl: null,
                youtubeId: null,
                ingredients: null,
                preparation: null
            },
            rules:{
                required: (value)=> !!value|| 'Required.'
            },
            error: null
        }
    },
    methods:{
        async save(){
            this.error=null
            let areRequiredFilledIn = false
            if(this.recipe.title!==null&&this.recipe.category!==null&&this.recipe.imageUrl!==null){
                areRequiredFilledIn = true
            }
            if(!areRequiredFilledIn){
                this.error="Fill in all the required fileds"
                return
            }
            const recipeId = this.$store.state.route.params.recipeId
            try{
                await RecipesService.put(this.recipe)
                this.$router.push({
                    name: 'recipe',
                    params:{
                        recipeId: recipeId
                    }
                })
            }
            catch(err){
                console.log(err)
            }
        }
    },
    async mounted(){
            try{
                const recipeId = this.$store.state.route.params.recipeId
                this.recipe = (await RecipesService.show(recipeId)).data
            }
            catch(err){
                console.log(err)
            }
    }
}
</script>

<style scoped>

</style>
