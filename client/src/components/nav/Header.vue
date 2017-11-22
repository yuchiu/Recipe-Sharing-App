<template>
    <v-toolbar fixed class= "deep-orange accent-1" dark>
        <v-toolbar-title class= "mr-4" >
            <router-link 
                class="home" 
                tag="span"
                :to = "{name: 'recipes'}">
            RECIPE <b>BOX</b><i class="fa fa-spoon fa-lg" aria-hidden="true"></i>
            </router-link>
        </v-toolbar-title >

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn 
            flat dark 
            v-if="!$store.state.isUserLoggedIn"
            :to="{name: 'register'}">
                register
            </v-btn>
            <v-btn 
            flat dark 
            v-if="!$store.state.isUserLoggedIn"
            :to="{name: 'signin'}">
                sign in
            </v-btn>
            <v-btn 
            flat dark 
            v-if="$store.state.isUserLoggedIn"
            @click="signout">
                sign out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods:{
        signout(){
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'recipes'
            })
        }
    }
}
</script>

<style scoped>
.home{
    font-family: 'Sofia', cursive;
    cursor: pointer;
    font-size:24px;
}
</style>
