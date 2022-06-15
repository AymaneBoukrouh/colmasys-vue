<script setup>
import ClubForm from '@/forms/ClubForm.vue'
</script>

<template>
  <div class="d-flex flex-row align-items-center p-3">
      <ClubForm
        formSubmit = 'addClub'
        formTitle = 'Register New Club'
        submitName = 'Register'
      />
  </div>
</template>