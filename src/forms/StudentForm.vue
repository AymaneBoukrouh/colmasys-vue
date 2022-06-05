<template>
  <div class="col-4"></div>
    <div class="col-4">
      <div class="beautiful-box">
        <form @submit.prevent="onSubmit">
          <fieldset>
            <legend>Register New Student</legend>
            <div class="mb-3">
              <label class="form-label" for="sid">SID (Student ID)</label>
              <input class="form-control" name="sid" v-model="sid" type="text">
            </div>
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
              <input class="form-control text-center" name="birthdate" v-model="birthdate" type="date">
            </div>
            <div class="mb-3">
              <label class="form-label" for="gender">Gender</label>
              <br>
              <input class="form-check-input" name="gender" value="male" v-model="gender" id="gender-male" type="radio">
              <label class="form-check-label" for="gender-male">&ensp;Male</label>
              <br>
              <input class="form-check-input" name="gender" value="female" v-model="gender" id="gender-female" type="radio">
              <label class="form-check-label" for="gender-female">&ensp;Female</label>
            </div>
            <input class="btn btn-primary" type="submit" value="Register">
          </fieldset>
        </form>
      </div>
    </div>
  <div class="col-4"></div>
</template>

<script>
export default {
  props: {
    sid: String,
    firstname: String,
    lastname: String,
    email: String,
    birthdate: String,
    gender: String,
    formSubmit: String
  },
  methods: {
    onSubmit: async function () {
      if (this.formSubmit == 'addStudent')
        await this.addStudent();
      else if (this.formSubmit == 'editStudent')
        await this.editStudent();
    },
    addStudent: async function () {
      const [year, month, day] = this.birthdate.split('-');

      const data = {
        username: this.sid,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        birthdate: `${day}/${month}/${year}`,
        gender: (this.gender == 'male')? 0: 1
      };

      console.log(JSON.stringify(data));

      const response = await fetch('http://localhost:8000/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      this.$router.push('/students');
    },
    editStudent: async function () {
      console.log('edit');
    }
  }
}
</script>

<style scoped>

</style>