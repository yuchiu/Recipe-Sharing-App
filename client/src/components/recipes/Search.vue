<template>
  <div id="search-container">
    <input
    type="text"
      id="search-input"
      v-model="search"
      placeholder="Search recipe by name or ingredients"><i class="fa fa-search fa-2x" aria-hidden="true"></i></input>
    </div>
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

#search-container {
    width: 100vw;
    height: 300px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-image: url('https://i.imgur.com/DNktBiY.jpg');
    background-size: cover;
}
#search-container i{
  margin-left: -30px;
  color: #fff;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: pink;
}
::-moz-placeholder { /* Firefox 19+ */
  color: pink;
}
#search-input{
  color: #fff;
  padding: 5px 10px;
  font-size: 17px;
  width: 400px;
  border-bottom: 2px solid #fff;
  border-radius: 2px;
  padding-right:30px;
}
#search-input:focus{
  outline: 0;
}
#search-input:hover{
  margin-right:40px;
    -webkit-transition: all 700ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -moz-transition: all 700ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -ms-transition: all 700ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -o-transition: all 700ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    transition: all 700ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
  transform: scale(1.2);
}
</style>
