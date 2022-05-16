<script setup>
defineProps({
  icon: {
      type: String,
      required: true
  },
  color: {
      type: String,
      required: true
  },
  text: {
      type: String,
       required: true
  },
  value: {
      type: Number,
      required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="beautiful-box">
  <div class="d-flex flex-row justify-content-between align-items-center">
    <i :class="'bi-' + icon" :style="'font-size: 48px; color: ' + color + ';'"></i>
    <div class="d-flex flex-column">
      <div class="text-end" style="font-weight: bold; font-size: 20px;">{{ text }}</div>
      <div class="text-primary text-end" style="font-weight: bold; font-size: 18px;">{{ value }}</div>
    </div>
  </div>
  <hr class="my-2">
  <div class="text-primary" style="font-size: 18px;"><router-link :to='link'><i class="bi-arrow-right"></i>&ensp;Manage</router-link></div>
</div>
</template>

<style scoped>

</style>
