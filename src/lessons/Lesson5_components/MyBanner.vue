//MyBanner.vue

<!-- MyBanner.vue -->
<template>
    <div
      class="my-banner"
      :class="[`type-${type}`, { rounded: rounded }]"
    >
      <!-- 預設 slot：公告內容 -->
      <div class="banner-content">
        <slot>這裡是預設公告內容</slot>
      </div>
  
      <!-- action slot：額外動作 -->
      <div class="banner-action">
        <slot name="action"></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    type: {
        type: String,
        default: 'info',
        validator: (val) => ['error','warning','success','info'].includes(val)
    },
    rounded: {
        type: Boolean,
        default: false
    }
  })
  </script>
  
  <style scoped>
  .my-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f5f5f5;
    padding: 12px 16px;
    margin: 8px 0;
    border: 1px solid #ddd;
  }

  .my-banner.type-error { background: #fdd; border: 1px solid red; }
  .my-banner.type-warning { background: #ffe5b4; border: 1px solid orange; }
  .my-banner.type-success { background: #dfffd6; border: 1px solid green; }
  .my-banner.type-info { background: #e0f0ff; border: 1px solid blue; }
    
  .my-banner.rounded {
    border-radius: 12px;
  }
  
  .banner-content {
    flex: 1;
  }
  
  .banner-action {
    margin-left: auto;
  }
  </style>
  