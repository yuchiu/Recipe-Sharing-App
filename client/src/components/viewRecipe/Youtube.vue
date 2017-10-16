<template>
    <panel title= "Youtueb Video">
        <youtube 
            :video-id="youtubeId"
            :player-width="500"
            :player-height="300"
        ></youtube>
    </panel>
</template>

<script>
import Panel from '@/components/globals/Panel'
export default {
  components:{
    Panel
  },
  props:[
      'youtubeId'
  ]
}
</script>

<style scoped>

</style>
