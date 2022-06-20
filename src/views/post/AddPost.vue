<script setup>
import PostForm from '@/forms/PostForm.vue'
</script>

<template>
  <div class="d-flex flex-row align-items-center p-3">
      <PostForm
        formSubmit = 'addPost'
        formTitle = 'Create Post'
        submitName = 'Post'
      />
  </div>
</template>