<script setup>
import Post from '@/components/Post.vue'
</script>

<template>
  <div v-for="post of posts">
    <Post
      :id = 'post.id'
      :author = 'post.author'
      imgsrc = 'https://picsum.photos/id/1005/200/200'
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
    await fetch('http://localhost:8000/feed')
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