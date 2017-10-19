<template>
    <panel title = "Recently Viewed Recipes">
        <v-data-table
            :headers="headers"
            :pagination.sync="pagination"
            :items="histories"
            >
            <template slot="items" scope="props">
            <td class="text-xs-right">{{ props.item.title }}</td>
            <td class="text-xs-right">{{ props.item.category }}</td>
            </template>
        </v-data-table>
    </panel>
</template>

<script>
import RecipeHistorysService from '@/services/RecipeHistorysService'
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
            histories:[]
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
            this.histories = (await RecipeHistorysService.index({
                userId : this.user.id
            })).data
        }
    }
}
</script>

<style scoped>

</style>