<!-- MyBadge.vue -->
<script setup>
import { computed } from 'vue' // ✅ 這個一定要有！
const props = defineProps({
  label: String,
  color: String,
  textColor: String,
  rounded: Boolean
})

const badgeStyle = computed(() => ({
  backgroundColor: props.color || '#ccc',
  color: props.textColor || '#000',
  padding: '4px 8px',
  borderRadius: props.rounded ? '999px' : '4px',
}))
</script>

<template>
  <span class="badge" :style="badgeStyle">
    {{ label }}
  </span>
</template>

<style scoped>
.badge {
  display: inline-block;
  font-size: 1.2rem;
  margin: 0.5rem;
}
</style>
