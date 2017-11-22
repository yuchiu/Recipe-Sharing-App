<template>
  <div id="app">
    <v-app>
      <page-header />
      
      <main>
        <v-container fluid id="v-container">
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/nav/Header.vue'

export default {
  name: 'app',
  components:{
    PageHeader
  }
}
</script>

<style>
#app {font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
#v-container{
  padding:0;
}
.danger-alert{
  color: red;
}

</style>
