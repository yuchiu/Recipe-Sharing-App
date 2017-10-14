<template>
    <v-toolbar fixed class= "red lighten-1" dark>
        <v-toolbar-title class= "mr-4" >
            <span class="home" @click="navigateTo({name: 'root'})">
            Recipe Box
            </span>
        </v-toolbar-title >

        <v-toolbar-items>
            <v-btn flat dark>
                browse
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn 
            flat dark 
            v-if="!$store.state.isUserLoggedIn"
            @click="navigateTo({name: 'register'})">
                register
            </v-btn>
            <v-btn 
            flat dark 
            v-if="!$store.state.isUserLoggedIn"
            @click="navigateTo({name: 'signin'})">
                sign in
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
.home{
    cursor: pointer;
}
</style>
