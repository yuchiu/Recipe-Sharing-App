<template>
        <panel title="preparation">
         <textarea
            readonly
            label="preparation"
            v-model="preparation"
        ></textarea>
        </panel>
</template>

<script>
export default {
  props:[
      'preparation'
  ]
}
</script>

<style scoped>
textarea{
  width:90%;
  font-family: monospace;
  border: none;
  height: 500px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>