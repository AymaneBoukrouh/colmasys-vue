<template>
  <div class="d-flex flex-row mb-4" :class="{ 'justify-content-start' : received, 'justify-content-end' : sent }">
    <img v-if="received" src="https://picsum.photos/id/1005/200/200" style="width: 45px; height: 100%;">
    <div class="p-3" :class="{ 'ms-3' : received, 'me-3' : sent }" style="border-radius: 15px; background-color: rgba(57, 192, 237,.2);">
      <p class="small mb-0">{{ content }}</p>
    </div>
    <img v-if="sent" src="https://picsum.photos/id/1005/200/200" style="width: 45px; height: 100%;">
  </div>
</template>

<script>
export default {
  props: {
    type: Boolean,
    content: String,
    sent: Boolean,
    received: Boolean
  }
}
</script>

<style scoped>
.main {
  display: inline-block;
  color: white;
  background-color: #333338;
  padding: 10px;
  margin: 5px 15px;
}

img {
  border-radius: 50%;
}
</style>