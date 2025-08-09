<template>
    <button
      class="my-button"
      :class="shapeClass"
      :style="buttonStyle"
      @click="$emit('click')"
    >
      {{ label }}
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    color: { type: String, default: '#1976d2' },
    textColor: { type: String, default: '#ffffff' },
    label: { type: String, default: 'Click Me' },
    fontSize: { type: Number, default: 16 },
    round: { type: Boolean, default: false },
    square: { type: Boolean, default: false }
  })
  
  const buttonStyle = computed(() => ({
    backgroundColor: props.color,
    color: props.textColor,
    fontSize: `${props.fontSize}px`,
    padding: `${props.fontSize * 0.3}px ${props.fontSize * 0.6}px`
  }))
  
  // 只允許套用一種樣式
  const shapeClass = computed(() => {
  if (props.round) return 'round'
  if (props.square) return 'square'
  return ''
})

  </script>
  
  <style scoped>
  .my-button {
    border: none;
    cursor: pointer;
    transition: 0.2s;
  }
  
  .round {
    border-radius: 5px;
  }
  
  .square {
    border-radius: 0;
  }
  </style>
  