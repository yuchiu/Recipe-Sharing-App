<template>
    <panel title="Ingredients">
        <textarea
        readonly
        label="Ingredients"
        v-model="ingredients"
    ></textarea>
    </panel>
</template>

<script>
export default {
  props:[
      'ingredients'
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
