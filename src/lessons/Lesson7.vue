//Lesson.vue

  <template>
    <div style="padding: 20px;">
      <h2>JavaScript 系列九：第7課 ── 學習開發狀態複雜的 vue 元件</h2>
  
      <div style="margin-bottom: 30px;">
        <h3>範例 1</h3>
        <MyColor v-model="color1" />
        <p>選擇的顏色: <span :style="{ color: color1 }">{{ color1 }}</span></p>
      </div>
  
      <div style="margin-bottom: 30px;">
        <h3>範例 2</h3>
        <MyColor v-model="color2" />
        <p>選擇的顏色: <span :style="{ color: color2 }">{{ color2 }}</span></p>
      </div>
  
      <div style="margin-bottom: 30px;">
        <h3>範例 3</h3>
        <MyColor v-model="color3" />
        <p>選擇的顏色: <span :style="{ color: color3 }">{{ color3 }}</span></p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import MyColor from './Lesson7_components/MyColor.vue';
  
  // 初始化範例顏色
  const color1 = ref('#ff0000'); // 紅色
  const color2 = ref('#00ff00'); // 綠色
  const color3 = ref('#34568b'); // 經典藍
  </script>
  
  <style scoped>
  h2 {
    color: rgb(93, 44, 149);
  }
  </style>