<script setup>
import SubjectForm from '@/forms/SubjectForm.vue'
</script>

<template>
  <div class="d-flex flex-row align-items-center p-3">
      <SubjectForm
        formSubmit = 'addSubject'
        formTitle = 'Register New Subject'
        submitName = 'Register'
      />
  </div>
</template>