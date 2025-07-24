<script setup>
  import { ref } from 'vue'
  const msg_Main= ref('I am main!')
</script>

<template>
  <div>
     <h2>{{ msg_Main }}</h2>
  </div>
</template>

<style scoped>
  h2{
    color:blue
  }
</style>
