<template>
    <panel title = "Recently Viewed Recipes">
        <v-data-table
            :headers="headers"
            :pagination.sync="pagination"
            :items="recents"
            >
            <template slot="items" scope="props">
            <td class="text-xs-right">{{ props.item.title }}</td>
            <td class="text-xs-right">{{ props.item.category }}</td>
            </template>
        </v-data-table>
    </panel>
</template>

<script>
import RecipeRecentsService from '@/services/RecipeRecentsService'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            headers: [
                {
                    text: 'Title',
                    value: 'title'
                },{
                    text: 'Category',
                    value: 'category'

                }
            ],
            pagination:{
                sortBy: 'createdAt',
                descending: true
            },
            recents:[]
        }
    },
    computed:{
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    async mounted(){
        if(this.isUserLoggedIn){
            this.recents = (await RecipeRecentsService.index({
                userId : this.user.id
            })).data
        }
    }
}
</script>

<style scoped>

</style>