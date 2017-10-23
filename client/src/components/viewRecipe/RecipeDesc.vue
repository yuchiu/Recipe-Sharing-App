<template>
    <panel title="View Recipe">
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
                name: 'recipes-edit', 
                params(){
                        return {
                            recipeId:recipe.id
                            }
                        }
                    }">
                Edit
            </v-btn>

            <v-btn
                v-if="isUserLoggedIn && !bookmark"
                    class="orange lighten-3"            
                    @click = "setBookmark"
                >
                Set Bookmark
            </v-btn>
            <v-btn
                v-if="isUserLoggedIn && bookmark"
                    class="orange lighten-3"          
                    @click = "unsetAsBookmark"
                >
                Unset Bookmark
            </v-btn>
        </v-flex>
        <v-flex xs6>
            <img class="recipe-image" :src="recipe.imageUrl"/>
        </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
    props: [
        "recipe"
    ],
    data () {
        return{
            bookmark: null
        }
    },
    computed:{
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    watch:{
    async recipe(){
        if(!this.isUserLoggedIn){
            return
        }
        try{
            const bookmarks=  (await BookmarksService.index({
            recipeId : this.recipe.id
        })).data
        if(bookmarks.length){
            this.bookmark = bookmarks[0]
        }
        }catch(err){
            console.log(err)
        }
    }
    },
    methods:{
        async setBookmark(){
            try{
                this.bookmark = (await BookmarksService.post({
                    recipeId : this.recipe.id
                })).data
            }catch(err){
                console.log(err)
            }
        },
        async unsetAsBookmark(){
            try{
                await BookmarksService.delete(this.bookmark.id)
                this.bookmark = null
            }catch(err){
                console.log(err)
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