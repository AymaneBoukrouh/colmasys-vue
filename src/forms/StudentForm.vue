<template>
  <div class="col-4"></div>
    <div class="col-4">
      <div class="beautiful-box">
        <form @submit.prevent="onSubmit">
          <fieldset>
            <legend>{{ formTitle }}</legend>
            <div class="mb-3">
              <label class="form-label" for="sid">*SID (Student ID)</label>
              <input class="form-control" name="sid" v-model="sid" type="text">
            </div>
            <div class="mb-3">
              <label class="form-label" for="class">Class</label>
              <select class="form-select" name="class" id="class" v-model="class_id">
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label" for="firstname">*First Name</label>
              <input class="form-control" name="firstname" v-model="firstname" type="text">
            </div>
            <div class="mb-3">
              <label class="form-label" for="lastname">*Last Name</label>
              <input class="form-control" name="lastname" v-model="lastname" type="text">
            </div>
            <div class="mb-3">
              <label class="form-label" for="email">*Email</label>
              <div class="input-group">
                <span class="input-group-text">@</span>
                <input class="form-control" name="email" v-model="email" type="text">
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label" for="birthdate">*Birthdate</label>
              <input class="form-control text-center" name="birthdate" v-model="birthdate" type="date">
            </div>
            <div class="mb-3">
              <label class="form-label" for="gender">*Gender</label>
              <br>
              <input class="form-check-input" name="gender" value="male" v-model="gender" id="gender-male" type="radio">
              <label class="form-check-label" for="gender-male">&ensp;Male</label>
              <br>
              <input class="form-check-input" name="gender" value="female" v-model="gender" id="gender-female" type="radio">
              <label class="form-check-label" for="gender-female">&ensp;Female</label>
            </div>
            <input class="btn btn-primary" type="submit" :value="submitName">
          </fieldset>
        </form>
      </div>
    </div>
  <div class="col-4"></div>
</template>

<script>
export default {
  props: {
    id: Number,
    sid: String,
    firstname: String,
    lastname: String,
    email: String,
    birthdate: String,
    gender: String,
    class_id: Number,
    formSubmit: String,
    formTitle: String,
    submitName: String
  },
  async mounted () {
    await fetch(`http://localhost:8000/classes`)
      .then((response) => response.json()
        .then((classes) => {
          classes.forEach((class_) => $('#class').append(new Option(`${class_.name}`, class_.id)));
        })
      )
  },
  methods: {
    onSubmit: async function () {
      if (this.formSubmit == 'addStudent')
        await this.addStudent();
      else if (this.formSubmit == 'editStudent')
        await this.editStudent();
    },
    sendStudentData: async function (method, endpoint) {
      const [year, month, day] = this.birthdate.split('-');

      const data = {
        username: this.sid,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        birthdate: `${day}/${month}/${year}`,
        gender: (this.gender == 'male')? 0: 1,
        class_id: this.class_id
      };

      console.log(JSON.stringify(data));

      const response = await fetch(endpoint, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      this.$router.push('/students');
    },
    addStudent: async function () {
      this.sendStudentData('POST', 'http://localhost:8000/student');
    },
    editStudent: async function () {
      this.sendStudentData('PUT', `http://localhost:8000/student/${this.id}`);
    }
  }
}
</script>

<style scoped>

</style>