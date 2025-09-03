//Lesson5.vue



<template>
  <div>
    <h2>🎯 JavaScript 系列九：第5課 ── 學習 Vue 的 slots 觀念</h2>

    <!-- 範例1：只放公告內容 -->
    <MyBanner type="warning" >
      🚨 系統將於今晚 12 點維護！
    </MyBanner>

    <!-- 範例2：放公告內容 + action slot -->
    <MyBanner  type="info">
      📢 新版本已上線，快來體驗！
      <template #action>
        <button @click="handleClick">詳細資訊</button>
      </template>
    </MyBanner>

    <!-- 範例3：加上 rounded 樣式 -->
    <MyBanner rounded type="success">
      ✅ 已成功完成操作
      <template #action>
        <a href="#">查看紀錄</a>
      </template>
    </MyBanner>
  </div>
</template>

<script setup>
import MyBanner from './Lesson5_components/MyBanner.vue'

function handleClick() {
  alert('前往詳細資訊頁面')
}
</script>




<style scoped>
h2 {
  color: rgb(12, 98, 105);
  margin-bottom: 16px;
}

</style>



