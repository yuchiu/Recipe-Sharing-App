<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class= "white elevation-2">
        <v-toolbar flat dense class="red lighten-1" dark>
          <v-toolbar-title>Sign In</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pb-2 pt-2 ">
          <form name="registerForm"
            autocomplete="off">
              <v-text-field  
                color="dark grey"
                label="email"
                v-model="email"
              ></v-text-field>
            <br/>
              <v-text-field
                color="dark grey"
                label="password"
                type = "password"
                v-model="password"
              ></v-text-field>
            <br/>
            <div class="error" v-html="error"></div>
            <br/>
            <v-btn class="red lighten-1" @click="signin" dark>sign in</v-btn>
          </form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
        email:'',
        password:'',
        error : null
    }
  },
  methods: {
      async signin (){
          try{
            const response = await AuthenticationService.signin({
              email:this.email,
              password:this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          }catch (error){
            this.error = error.response.data.error
          }
      }
  }
}
</script>

<style scoped>
  .error {
    color: white;
  }
</style>
