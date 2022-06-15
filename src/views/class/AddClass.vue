<script setup>
import ClassForm from '@/forms/ClassForm.vue'
</script>

<template>
  <div class="d-flex flex-row align-items-center p-3">
      <ClassForm
        formSubmit = 'addClass'
        formTitle = 'Register New Class'
        submitName = 'Register'
      />
  </div>
</template>