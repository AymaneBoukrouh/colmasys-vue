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
  methods: {
    onSubmit: async function () {
      if (this.formSubmit == 'addClub')
        await this.addClub();
      else if (this.formSubmit == 'editClub')
        await this.editClub();
    },
    sendClubData: async function (method, endpoint) {
      const data = {
        name: this.name
      };

      console.log(JSON.stringify(data));

      const response = await fetch(endpoint, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      this.$router.push('/clubs');
    },
    addClub: async function () {
      this.sendClubData('POST', 'http://localhost:8000/club');
    },
    editClub: async function () {
      this.sendClubData('PUT', `http://localhost:8000/club/${this.id}`);
    }
  }
}
</script>

<style scoped>

</style>