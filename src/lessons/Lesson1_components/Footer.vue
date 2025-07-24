<script setup>
  import { ref } from 'vue'
  const msg_Footer= ref('I am footer!')
</script>

<template>
  <div>
     <h3>{{ msg_Footer }}</h3>
  </div>
</template>

<style scoped>
  h3{
    color:green
  }
</style>
