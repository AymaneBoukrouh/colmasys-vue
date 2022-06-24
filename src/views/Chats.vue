<script setup>
import ChatList from '@/components/ChatList.vue'
import Chat from '@/components/Chat.vue'
</script>

<template>
  <div class="main row">
    <div class="col-3">
      <ChatList 
        :chats = 'chats'
        />
    </div>
    <div class="col-9">
      <Chat />
    </div>
  </div>
</template>

<script>
export default {
  async mounted () {
    //await fetch('http://localhost:8000/user/T10013/posts')
    //.then((response) => response.json()
    //  .then((data) => {
    //    this.posts = data;
    //  })
    //)
  },
  data () {
    return {
      chats: [
        {name: 'Achraf Zakaria El Assali', last_message: 'Bye!', pending_messages: 1},
        {name: 'Administration', last_message: 'document.docx', last_sender: 'Director'},
        {name: 'Omar Ben Sabihg El Imrany', last_message: 'Done?', pending_messages: 3},
        {name: 'Maissae Amzghar', last_message: 'Ok'},
        {name: '3IIR-G2', last_message: '3IRR-G2-Exams.pdf', last_sender: 'El Khadir'},
        {name: 'Yousra Tribak', message: 'Sure'},
        {name: 'Abdelkarim Yemlahi', last_message: 'Thanks!'},
        {name: 'Chaimae Loukili', message: 'There you go.'},
        {name: 'Hicham Bouhamid', last_message: 'Received.'},
        {name: 'Farah Matallaoui', last_message: 'https://www.youtube.com/watch?v=juocv4AtrHo&ab_channe...'},
        {name: 'Hamza Bakhti', message: 'Yes'},
        {name: 'Mehdi El Houari', last_message: 'Bye'},
        {name: 'Samir El Asri', last_message: 'Laravel'},
        {name: 'Zakaria El Hajri', last_message: 'Ok'}
      ]
    }
 }
}
</script>

<style scoped>
.main {
  max-height: 97%;
}
</style>