<template>
  <div>
    <h2>JavaScript 系列九：第4課 ── 學習 Vue 的 v-model 觀念</h2>

    <!-- 帳號 -->
    <MyInput
      v-model="username"
      label="帳號"
      filled
    />

    <!-- Email 格式檢查 -->
    <MyInput
      v-model="email"
      label="Email"
      outlined
      type="email"
    />

    <p>username: {{ username }}</p>
    <p>email: {{ email }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyInput from './Lesson4_components/MyInput.vue'

const username = ref('')
const email = ref('')
</script>

<style scoped>
h2 {
  color: rgb(31, 87, 21);
  margin-bottom: 20px;
}
</style>
