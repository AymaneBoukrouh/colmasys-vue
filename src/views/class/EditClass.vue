<script setup>
import ClassForm from '@/forms/ClassForm.vue'
</script>

<template>
  <div class="d-flex flex-row align-items-center p-3">
      <ClassForm
        formSubmit = 'editClass'
        formTitle = 'Edit Class'
        submitName = 'Save'
        :id = 'id'
        :major = 'major'
        :year = 'year'
        :group = 'group'
        :academic_year = 'academic_year'
      />
  </div>
</template>

<script>
export default {
  data () {
   return {
      id: parseInt(this.$route.params.id),
      major: null,
      year: null,
      group: null,
      academic_year: null,
    }
  },
  async mounted () {
    await fetch(`http://localhost:8000/class/${this.id}`)
      .then((response) => response.json()
        .then((data) => {
          this.major = data.major;
          this.year = data.year;
          this.group = data.group;
          this.academic_year = data.academic_year;
        })
      )
  }
}
</script>

<style scoped>

</style>