<template>
  <div class="col-4"></div>
    <div class="col-4">
      <div class="beautiful-box">
        <form @submit.prevent="onSubmit">
          <fieldset>
            <legend>{{ formTitle }}</legend>
            <div class="mb-3">
              <label class="form-label" for="name">Name</label>
              <input class="form-control" name="name" v-model="name" type="text">
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
    name: String,
    formSubmit: String,
    formTitle: String,
    submitName: String
  },
  //async mounted () {
  //  for (var i=2022; i>1999; i--)
  //    $('#academic-year').append(new Option(`${i}/${i+1}`, `${i}/${i+1}`));
  //},
  methods: {
    onSubmit: async function () {
      if (this.formSubmit == 'addSubject')
        await this.addSubject();
      else if (this.formSubmit == 'editSubject')
        await this.editSubject();
    },
    sendSubjectData: async function (method, endpoint) {
      const data = {
        name: this.name
      };

      console.log(JSON.stringify(data));

      const response = await fetch(endpoint, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      this.$router.push('/subjects');
    },
    addSubject: async function () {
      this.sendSubjectData('POST', 'http://localhost:8000/subject');
    },
    editSubject: async function () {
      this.sendSubjectData('PUT', `http://localhost:8000/subject/${this.id}`);
    }
  }
}
</script>

<style scoped>

</style>