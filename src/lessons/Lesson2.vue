<template>
  
  <h2>JavaScript 系列九：第2課 ── 學習 Vue 的 props 觀念</h2>
  <h3>🎯 MyBadge 設定器</h3>
  <div class="container">
    <!-- 左欄：輸入區 -->
    <div class="left-panel">
      <label>
        Label：
        <input v-model="label" type="text" />
      </label>

      <label>
        背景色：
        <select v-model="color">
          <option value="red">紅色</option>
          <option value="green">綠色</option>
          <option value="blue">藍色</option>
        </select>
      </label>

      <label>
        文字色：
        <select v-model="textColor">
          <option value="white">白色</option>
          <option value="black">黑色</option>
          <option value="yellow">黃色</option>
        </select>
      </label>

      <label>
        <input type="checkbox" v-model="rounded" />
        圓角
      </label>

      <button @click="addBadge">設定完成</button>
      <div class="preview-box">
        <p>預覽：</p>
        <MyBadge :label="label" :color="color" :text-color="textColor" :rounded="rounded" />
      </div>


    </div>

    <!-- 右欄：badge 預覽列表 -->
    <div class="right-panel">
      <div v-for="(item, index) in badgeList" :key="index">
        <MyBadge
          :label="item.label"
          :color="item.color"
          :text-color="item.textColor"
          :rounded="item.rounded"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyBadge from './Lesson2_components/MyBadge.vue'

// 資料綁定
const label = ref('警告')
const color = ref('red')
const textColor = ref('white')
const rounded = ref(false)

// 所有 badge 預覽清單
const badgeList = ref([])

// 新增一個 badge 到列表
function addBadge() {
  badgeList.value.push({
    label: label.value,
    color: color.value,
    textColor: textColor.value,
    rounded: rounded.value
  })
}
</script>

<style scoped>
h2 {
    color: rgb(128, 32, 0);
  }
.container {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
}


.left-panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  max-width: 300px;

  background-color: #fdf6ec; /* 明亮杏色背景 */
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1); /* 向右下陰影：有凸出感 */
}

input,
select {
  font-size: 1.2rem;
  padding: 0.4rem;
}


.right-panel {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: #f4f4f4; /* 淺灰背景 */
  padding: 1rem;
  border-radius: 12px;
  box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.1); /* 內陰影：凹陷感 */
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #16858d; 
  color: rgb(201, 232, 245);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #571a80;
}
.preview-box {
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fffefa;
  text-align: center; /* 置中文字與 badge */
  margin-top: 1rem;
}

</style>
