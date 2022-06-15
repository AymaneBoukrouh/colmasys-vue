<script setup>
import ProfessorForm from '@/forms/ProfessorForm.vue'
</script>

<template>
  <div class="d-flex flex-row align-items-center p-3">
      <ProfessorForm
        formSubmit = 'addProfessor'
        formTitle = 'Register New Professor'
        submitName = 'Register'
      />
  </div>
</template>