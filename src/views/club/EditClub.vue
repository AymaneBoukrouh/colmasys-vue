<script setup>
import ClubForm from '@/forms/ClubForm.vue'
</script>

<template>
  <div class="d-flex flex-row align-items-center p-3">
      <ClubForm
        formSubmit = 'editClub'
        formTitle = 'Edit Club'
        submitName = 'Save'
        :id = 'id'
        :name = 'name'
      />
  </div>
</template>

<script>
export default {
  data () {
   return {
      id: parseInt(this.$route.params.id),
      name: null
    }
  },
  async mounted () {
    await fetch(`http://localhost:8000/club/${this.id}`)
      .then((response) => response.json()
        .then((data) => {
          this.name = data.name;
        })
      )
  }
}
</script>

<style scoped>

</style>