
//MyColor.vue

<template>
    <div class="my-color-picker">
      <div
        class="color-preview"
        :style="{ backgroundColor: currentHex }"
      ></div>
  
      <div class="sliders">
        <label>R: {{ r }}
          <input type="range" min="0" max="255" v-model.number="r" />
        </label>
        <label>G: {{ g }}
          <input type="range" min="0" max="255" v-model.number="g" />
        </label>
        <label>B: {{ b }}
          <input type="range" min="0" max="255" v-model.number="b" />
        </label>
      </div>
  
      <p>HEX: {{ currentHex }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, computed } from 'vue'
  
  // ✅ 正確取得 props
  const props = defineProps({
    modelValue: { type: String, default: '#000000' }
  })
  const emit = defineEmits(['update:modelValue'])
  
  // HEX ↔ RGB 工具函式
  function hexToRgb(hex) {
    hex = hex.replace('#', '')
    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return { r, g, b }
  }
  function rgbToHex(r, g, b) {
    return (
      '#' +
      [r, g, b]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('')
    )
  }
  
  // 內部狀態
  const r = ref(0)
  const g = ref(0)
  const b = ref(0)
  
  // 初始化 r/g/b
  const init = hexToRgb(props.modelValue)
  r.value = init.r
  g.value = init.g
  b.value = init.b
  
  // 計算 HEX
  const currentHex = computed(() => rgbToHex(r.value, g.value, b.value))
  
  // 當 r/g/b 改變時，發送 update:modelValue
  watch([r, g, b], () => {
    emit('update:modelValue', currentHex.value)
  })
  
  // 當外部 modelValue 改變時，也更新內部狀態
  watch(
    () => props.modelValue,
    newVal => {
      const rgb = hexToRgb(newVal)
      r.value = rgb.r
      g.value = rgb.g
      b.value = rgb.b
    }
  )
  </script>
  
  <style scoped>
  .my-color-picker {
    width: 250px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-family: Arial, sans-serif;
  }
  .color-preview {
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    border: 1px solid #aaa;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  .sliders label {
    display: block;
    margin-bottom: 5px;
  }
  input[type='range'] {
    width: 100%;
  }
  </style>
  