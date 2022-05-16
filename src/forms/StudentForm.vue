<template>
  <div class="col-4"></div>
    <div class="col-4">
      <div class="beautiful-box">
        <form @submit="registerStudent">
          <fieldset>
            <legend>Register New Student</legend>
            <div class="mb-3">
              <label class="form-label" for="firstname">First Name</label>
              <input class="form-control" name="firstname" v-model="firstname" type="text">
            </div>
            <div class="mb-3">
              <label class="form-label" for="lastname">Last Name</label>
              <input class="form-control" name="lastname" v-model="lastname" type="text">
            </div>
            <div class="mb-3">
              <label class="form-label" for="lastname">Email</label>
              <div class="input-group">
                <span class="input-group-text">@</span>
                <input class="form-control" name="lastname" v-model="email" type="text">
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label" for="birthdate">Birthdate</label>
              <input class="form-control text-center" name="birthdate" type="date">
            </div>
            <div class="mb-3">
              <label class="form-label" for="gender">Gender</label>
              <br>
              <input class="form-check-input" name="gender" id="gender-male" type="radio">
              <label class="form-check-label" for="gender-male">&ensp;Male</label>
              <br>
              <input class="form-check-input" name="gender" id="gender-female" type="radio">
              <label class="form-check-label" for="gender-female">&ensp;Female</label>
            </div>
            <input class="btn btn-primary" type="submit" value="Register">
          </fieldset>
        </form>
      </div>
    </div>
  <div class="col-4"></div>
</template>

<script>import { routerKey, useRouter } from "vue-router";

export default {
  data () {
    return {
      firstname: null,
      lastname: null,
      email: null,
      birthdate: null,
      gender: null
    }
  },
  methods: {
    registerStudent: async function (f) {
      f.preventDefault();
      console.log('test');

      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.firstname + ' ' + this.lastname,
        email: this.email,
        password: 'pass1234',
        birthdate: '17/03/2001',
        gender: 1
      };

      console.log(JSON.stringify(data));

      const response = await fetch('http://localhost:8000/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      this.$router.push('/students');
    }
  }
}
</script>

<style scoped>

</style>