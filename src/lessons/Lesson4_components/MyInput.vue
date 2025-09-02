<template>
    <div class="my-input" :class="[outlined ? 'outlined' : '', filled ? 'filled' : '']">
      <label v-if="label">{{ label }}</label>
      <input
        :type="type"
        v-model="inputValue"
        @blur="validate"
        class="my-input__field"
      />
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, computed } from 'vue'
  
  const props = defineProps({
    modelValue: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    outlined: Boolean,
    filled: Boolean,
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const inputValue = ref(props.modelValue || '')
  
  // 雙向綁定
  watch(() => props.modelValue, val => { inputValue.value = val })
  watch(inputValue, val => { emit('update:modelValue', val) })
  
  
  // 驗證 email
  const errorMessage = ref('')
  function validate() {
    if (props.type === 'email' && inputValue.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      errorMessage.value = emailRegex.test(inputValue.value) ? '' : '請輸入有效的 Email'
    } else {
      errorMessage.value = ''
    }
  }
  </script>
  
  <style scoped>
  .my-input {
    display: flex;
    flex-direction: column;
    margin: 12px 0;
  }
  
  /* Label */
  .my-input label {
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #555;
  }
  
  /* Input 基本樣式 */
  .my-input input {
    padding: 10px;
    font-size: 14px;
    outline: none;
    transition: all 0.2s;
    box-sizing: border-box;
    width: 400px;
  }
  
  /* outlined */
  .my-input.outlined input {
    border: 1px solid #a23030;
    background: #fff;
  }
  .my-input.outlined input:focus {
    border: 1px solid #125a95;
    box-shadow: 0 0 4px rgba(25, 118, 210, 0.3);
  }
  
  /* filled */
  .my-input.filled input {
    background: #f5f5f5;
    border: none;
    border-bottom: 2px solid #ccc;
  }
  .my-input.filled input:focus {
    background: #fff;
    border-bottom: 2px solid #1976d2; /* 底線變藍 */
    box-shadow: none; /* 不要外框 */
  }
  
  /* 錯誤訊息 */
  .error {
    margin-top: 4px;
    color: red;
    font-size: 12px;
  }
  </style>
  