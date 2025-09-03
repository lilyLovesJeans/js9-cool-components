<template>
    <div v-if="modelValue" class="dialog-backdrop">
      <div class="dialog">
        <!-- slot：顯示外部傳入的內容 -->
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  // 讓外部可以呼叫：<MyDialog v-model="xxx"> 來控制顯示
  function closeDialog() {
    emit('update:modelValue', false)
  }
  </script>
  
  <style scoped>
  .dialog-backdrop {
    position: fixed;
    inset: 0; /* top, right, bottom, left = 0 */
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    min-width: 300px;
    max-width: 500px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }
  </style>
  