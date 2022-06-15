<template>
  <div class="col-4"></div>
    <div class="col-4">
      <div class="beautiful-box">
        <form @submit.prevent="onSubmit">
          <fieldset>
            <legend>{{ formTitle }}</legend>
            <div class="mb-3">
              <label class="form-label" for="major">Major</label>
              <input class="form-control" name="major" v-model="major" type="text">
            </div>
            <div class="mb-3">
              <label class="form-label" for="year">Year</label>
              <input class="form-control" name="year" v-model="year" type="text">
            </div>
            <div class="mb-3">
              <label class="form-label" for="group">Group</label>
              <input class="form-control" name="group" v-model="group" type="text">
            </div>
            <div class="mb-3">
              <label class="form-label" for="academic-year">Academic Year</label>
              <select class="form-select" name="academic-year" id="academic-year" v-model="academic_year"></select>
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
    major: String,
    year: Number,
    group: Number,
    academic_year: String,
    formSubmit: String,
    formTitle: String,
    submitName: String
  },
  async mounted () {
    for (var i=2022; i>1999; i--)
      $('#academic-year').append(new Option(`${i}/${i+1}`, `${i}/${i+1}`));
  },
  methods: {
    onSubmit: async function () {
      if (this.formSubmit == 'addClass')
        await this.addClass();
      else if (this.formSubmit == 'editClass')
        await this.editClass();
    },
    sendClassData: async function (method, endpoint) {
      const data = {
        major: this.major,
        year: this.year,
        group: this.group,
        academic_year: this.academic_year
      };

      console.log(JSON.stringify(data));

      const response = await fetch(endpoint, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      this.$router.push('/classes');
    },
    addClass: async function () {
      this.sendClassData('POST', 'http://localhost:8000/class');
    },
    editClass: async function () {
      this.sendClassData('PUT', `http://localhost:8000/class/${this.id}`);
    }
  }
}
</script>

<style scoped>

</style>