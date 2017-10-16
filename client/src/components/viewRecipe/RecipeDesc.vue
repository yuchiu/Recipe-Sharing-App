<template>
    <panel title="View Recipe">
        <v-layout>
        <v-flex xs6>
            <div class="recipe-title">
            {{recipe.title}}
            </div>
            <div class="recipe-category">
            {{recipe.category}}
            </div>
        </v-flex>
        <v-flex xs6>
            <img class="recipe-image" :src="recipe.imageUrl"/>
        </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import Panel from '@/components/globals/Panel'
export default {
    components:{
        Panel
    },
    props: [
        "recipe"
    ]
}

</script>

<style scoped>

.recipe{
    padding: 20px;
    height:200px;
    overflow: hidden;
}
.recipe-title{
    font-size: 30px;
}
.recipe-category{
    font-size: 24px;
}
.recipe-image{
  width: 60%;
  margin: 0 auto;
}
</style>