<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
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
              autocomplete="new-password"
            ></v-text-field>
          <br/>
          <div class="danger-alert" v-html="error"></div>
          <br/>
          <v-btn class="red lighten-1" @click="register" dark>register</v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/globals/Panel'

export default {
  data () {
    return {
        email:'',
        password:'',
        error : null
    }
  },
  components:{
    Panel
  },
  methods: {
      async register (){
          try{
          const response = await AuthenticationService.register({
              email:this.email,
              password:this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
            this.$router.push({
                name: 'recipes'
            })
          }catch (error){
            this.error = error.response.data.error
          }
      }
  }
}
</script>

<style scoped>
</style>
