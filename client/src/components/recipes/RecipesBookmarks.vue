<template>
  <panel title= "bookmark">
    
  <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks"
    >
    <template slot="items" scope="props">
      <td class="text-xs-right">{{ props.item.title }}</td>
      <td class="text-xs-right">{{ props.item.category }}</td>
    </template>
  </v-data-table>
  </panel>
</template>

<script>
import BookmarksService from '@/services/BookmarksService'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            headers: [
                {
                    text: 'title',
                    value: 'title'
                },{
                    text: 'category',
                    value: 'category'

                }
            ],
            pagination:{
                sortBy: 'date',
                descending: true
            },
            bookmarks:[]
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
            this.bookmarks = (await BookmarksService.index({
                userId : this.user.id
            })).data
        }
    }
}
</script>

<style scoped>

</style>
