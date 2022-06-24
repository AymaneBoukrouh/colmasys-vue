<script setup>
import Login from '@/views/Login.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <!--<Login />-->
  <Navbar />
  <!--<Login v-else />-->
</template>

<script>
export default {
  data () {
    return {
      'token': localStorage.token
    }
  }
}
</script>

<style scoped>

</style>
