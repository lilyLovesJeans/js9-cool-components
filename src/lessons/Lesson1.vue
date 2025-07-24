<template>
    <div>
      <h2>JavaScript 系列九：第1課 ── 學習 Vue 元件基本觀念</h2>
      <Header  />
      <Main  />
      <Footer  />
    </div>
  </template>
  
  <script setup>
    import Header from  './Lesson1_components/header.vue'
    import Main from './Lesson1_components/Main.vue'
    import Footer from './Lesson1_components/Footer.vue'
  </script>
  
  <style scoped>
  h2 {
    color: teal;
  }
  </style>
  