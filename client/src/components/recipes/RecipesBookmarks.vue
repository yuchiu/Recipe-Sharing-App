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
            this.bookmarks = (await BookmarksService.index()).data
        }
    }
}
</script>

<style scoped>

</style>
