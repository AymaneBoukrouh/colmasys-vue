<script setup>
import PostForm from '@/forms/PostForm.vue'
</script>

<template>
  <div class="d-flex flex-row align-items-center p-3">
      <PostForm
        formSubmit = 'editPost'
        formTitle = 'Edit Post'
        submitName = 'Save'
        :id = 'id'
        :title = 'title'
        :content = 'content'
      />
  </div>
</template>

<script>
export default {
  data () {
   return {
      id: parseInt(this.$route.params.id),
      title: null,
      content: null
    }
  },
  async mounted () {
    await fetch(`http://localhost:8000/post/${this.id}`)
      .then((response) => response.json()
        .then((data) => {
          this.title = data.title;
          this.content = data.content;
        })
      )
  }
}
</script>

<style scoped>

</style>