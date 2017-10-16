<template>
  <panel title="Search">
  
    <v-text-field
      color="dark grey"
      label="Search by recipe title or category"
      v-model="search"
    ></v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data(){
    return{
      search: ''
    }
  },
  watch:{
    search: _.debounce(async function (value){
      const route= {
        name: 'recipes'
      }
      if(this.search!==''){
        route.query={
          search: this.search
        }
      }
      this.$router.push(route)
    }, 600),
    '$route.query.search':{
      immediate: true,
      handler(value){
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
