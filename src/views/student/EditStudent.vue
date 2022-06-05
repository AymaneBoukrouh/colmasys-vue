<script setup>
import StudentForm from '@/forms/StudentForm.vue'
</script>

<template>
  <div class="d-flex flex-row align-items-center p-3">
      <StudentForm
        formSubmit = 'editStudent'
        :sid = 'sid'
        :firstname = 'firstname'
        :lastname = 'lastname'
        :email = 'email'
        :birthdate = 'birthdate'
        :gender = 'gender'
      />
  </div>
</template>

<script>
export default {
  data () {
   return {
      username: this.$route.params.username,
      sid: null,
      firstname: null,
      lastname: null,
      email: null,
      birthdate: null,
      gender: null
    }
  },
  async mounted () {
    await fetch(`http://localhost:8000/student/username/${this.username}`)
      .then((response) => response.json()
        .then((data) => {
          const [day, month, year] = data.birthdate.split('/');

          this.sid = data.username;
          this.firstname = data.firstname;
          this.lastname = data.lastname;
          this.email = data.email;
          this.birthdate = `${year}-${month}-${day}`;
          this.gender = data.gender.toLowerCase();
        })
      )
  }
}
</script>

<style scoped>

</style>