<script setup>
import StudentForm from '@/forms/StudentForm.vue'
</script>

<template>
  <div class="d-flex flex-row align-items-center p-3">
      <StudentForm
        formSubmit = 'addStudent'
        formTitle = 'Register New Student'
        submitName = 'Register'
      />
  </div>
</template>