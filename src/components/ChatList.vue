<template>
  <div class="main bg-dark overflow-auto">
    <ul class="list-group bg-dark overflow-hidden">
      <li class="list-group-item d-flex justify-content-between align-items-start bg-dark text-white" v-for="chat of chats">
        <div class="ms-2 me-auto">
          <div class="fw-bold h5">{{ chat.name }}</div>
          <div v-if="chat.message" class="text-muted"><b>You</b>:&nbsp;{{ chat.message }}</div> <!-- text muted -->
          <div v-else :class="{ 'text-muted' : !chat.pending_messages }">
            <span v-if="chat.last_sender"><b>{{ chat.last_sender }}</b>:</span>&nbsp;{{ chat.last_message }}
          </div>
        </div>
        <span class="badge bg-primary rounded-pill">{{ chat.pending_messages }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    chats: Array
  }
}
</script>

<style scoped>
</style>