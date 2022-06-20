<script setup>
import Post from '@/components/Post.vue'
</script>

<template>
  <div v-for="post of posts">
    <Post
      :id = 'post.id'
      :author = 'post.author'
      :title = 'post.title'
      :content = 'post.content'
      :n_votes = 'post.n_votes'
      :n_comments = 'post.n_comments'
    />
  </div>
</template>

<script>
export default {
  async mounted () {
    await fetch('http://localhost:8000/user/T10013/posts')
    .then((response) => response.json()
      .then((data) => {
        this.posts = data;
      })
    )
  },
  data () {
    return {
      posts: null
    }
 }
}
</script>

<style scoped>

</style>