<script setup>
import SubjectForm from '@/forms/SubjectForm.vue'
</script>

<template>
  <div class="d-flex flex-row align-items-center p-3">
      <SubjectForm
        formSubmit = 'editSubject'
        formTitle = 'Edit Subject'
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
    await fetch(`http://localhost:8000/subject/${this.id}`)
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