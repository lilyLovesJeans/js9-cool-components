<script setup>
import { ref } from 'vue'
import MyButton from './Lesson3_components/MyButton.vue'

const label = ref('按鈕')
const color = ref('#322725')
const textColor = ref('#CB9595')
const fontSize = ref(27)
const round = ref(true)
const square = ref(false)

const buttons = ref([]) 
const lastClicked = ref(null)
const isFadingOut = ref(false)
let timeout = null

function handleAddButton() {
  const newId = Date.now()
  buttons.value.push({
    id: newId,
    label: label.value,
    color: color.value,
    textColor: textColor.value,
    fontSize: fontSize.value,
    round: round.value,
    square: square.value
  })
}

function handleClick(buttonData) {
  if (timeout) clearTimeout(timeout)
  isFadingOut.value = false
  lastClicked.value = {
  text: `你剛剛點了：${buttonData.label}`
  }



  timeout = setTimeout(() => {
    isFadingOut.value = true
    setTimeout(() => {
      lastClicked.value = null
    }, 500) // 需與 CSS 動畫時間一致
  }, 3000)
}

function deleteButton(id) {
  buttons.value = buttons.value.filter(btn => btn.id !== id)
}

function onRoundChange() {
  if (round.value) square.value = false
}
function onSquareChange() {
  if (square.value) round.value = false
}
</script>

<template>
  <h2>JavaScript 系列九：第3課 ── 學習 Vue 的 events 觀念</h2>
  <div class="layout">
    <!-- 左邊控制面板 -->
    <div class="control-panel">
      <div class="top-section">
        <div class="control-wrapper">
        <h3>按鈕設定</h3>

        <label>
          按鈕文字：
          <input v-model="label" />
        </label>

        <label>
          背景顏色：
          <input type="color" v-model="color" />
        </label>

        <label>
          文字顏色：
          <input type="color" v-model="textColor" />
        </label>

        <label>
          大小：
          <input type="range" min="10" max="40" v-model.number="fontSize" />
          <span>{{ fontSize }}px</span>
        </label>

        <label>
          圓角樣式：
          <input type="checkbox" v-model="round" @change="onRoundChange" />
        </label>

        <label>
          方形樣式：
          <input type="checkbox" v-model="square" @change="onSquareChange" />
        </label>

      </div>

      <!-- 即時預覽區 -->
      <div class="preview-area">
        <MyButton
          :label="label"
          :color="color"
          :textColor="textColor"
          :fontSize="fontSize"
          :round="round"
          :square="square"
          @click="handleClick({ label })"
        />
      </div>
      </div>

      <div class="add-button-wrapper">
        <button class="add-button" @click="handleAddButton">設定完成</button>
      </div>
    </div>

    <!-- 右邊按鈕區 -->
    <div class="button-display">
      <h3>按鈕展示區</h3>

      <div
        v-if="lastClicked"
        class="toast-message"
        :class="{ show: !isFadingOut, 'fade-out': isFadingOut }"
      >
        {{ lastClicked.text }}
      </div>

      <div class="MyButton-wrapper">
        <div
          v-for="btn in buttons"
          :key="btn.id"
          class="button-container"
        >
          <MyButton
            :label="btn.label"
            :color="btn.color"
            :textColor="btn.textColor"
            :fontSize="btn.fontSize"
            :round="btn.round"
            :square="btn.square"
            @click="() => handleClick(btn)"
          />
          <button class="delete-btn" @click="deleteButton(btn.id)">×</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: #444;
}
.layout {
  display: flex;
  gap: 2rem;
  padding: 2rem;
}

.control-panel {
  flex: 2;
  display: flex;
  flex-direction: column; /* 分上下區塊 */
  gap: 1rem;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 1.5rem;
  background: #f5f5f5;
}

.top-section {
  display: flex;
  gap: 1rem;
}
/* 左側控制項 */
.control-wrapper {
  flex: 1;
  display: grid;
  gap: 1rem;
}

/* 右側預覽區 */
.preview-area {
  flex: 1;
  padding: 1rem;
  background-color: #bfbdbd94;  
  border: 1px inset #bbb;      
  border-radius: 10px;
  display: flex;              
  justify-content: center;   
  align-items: center;       
  min-height: 100px;          
}

.button-display {
  flex: 1;
  border: 2px dashed #999;
  border-radius: 10px;
  padding: 1.5rem;
  background: #fff;
}

.MyButton-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.add-button {
  width: 250px;
  height: 80px;
  background-color: #286892;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* 新增按鈕區 */
.add-button-wrapper {
  display: flex;
  justify-content:left;
  /* align-items: center; */
}


.add-button:hover {
  background-color: #760e93;
}

.button-container {
  position: relative;
  display: inline-block;
}

.delete-btn {
  position: absolute;
  background: #ff4d4f;
  border: none;
  border-radius: 50%;
  color: white;
  width: 20px;
  height: 20px;
  font-weight: bold;
  cursor: pointer;
  line-height: 18px;
  padding: 0;
  user-select: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.delete-btn:hover {
  background: #ff7875;
}

.preview-area {
  margin-bottom: 1rem;
  padding: 1rem;

  text-align: center;
}

.toast-message {
  padding: 10px 15px;
  background-color: #59c56796;
  color: #052811;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  max-width: 300px;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  position: relative;
  z-index: 10;
}

.toast-message.show {
  opacity: 1;
  transform: translateY(0);
}

.toast-message.fade-out {
  opacity: 0;
  transform: translateY(-20px);
}
</style>