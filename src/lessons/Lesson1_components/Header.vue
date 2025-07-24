<script setup>
  import { ref } from 'vue'
  const msg_Header= ref('I am header!')
</script>

<template>
  <div>
     <h1>{{ msg_Header }}</h1>
  </div>
</template>

<style scoped>
  h1{
    color:brown
  }
</style>
