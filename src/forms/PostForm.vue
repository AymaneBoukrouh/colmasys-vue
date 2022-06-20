<template>
  <div class="col-3"></div>
    <div class="col-6">
      <div class="beautiful-box">
        <form @submit.prevent="onSubmit">
          <fieldset>
            <legend>{{ formTitle }}</legend>
            <div class="mb-3">
              <label class="form-label" for="title">Title</label>
              <input class="form-control" name="title" v-model="title" type="text">
            </div>
            <div class="mb-3">
              <label class="form-label" for="content">Content</label>
              <textarea class="form-control" name="content" rows="10" v-model="content"></textarea>
            </div>
            <input class="btn btn-primary" type="submit" :value="submitName">
          </fieldset>
        </form>
      </div>
    </div>
  <div class="col-3"></div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    content: String,
    formSubmit: String,
    formTitle: String,
    submitName: String
  },
  methods: {
    onSubmit: async function () {
      if (this.formSubmit == 'addPost')
        await this.addPost();
      else if (this.formSubmit == 'editPost')
        await this.editPost();
    },
    sendPostData: async function (method, endpoint) {
      const data = {
        title: this.title,
        content: this.content
      };

      console.log(JSON.stringify(data));

      const response = await fetch(endpoint, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });      

      if (this.formSubmit == 'addPost')
        this.$router.push({name: 'Feed'});
      else if (this.formSubmit == 'editPost')
        this.$router.push({name: 'Post', params: {id: this.id}});
    },
    addPost: async function () {
      this.sendPostData('POST', 'http://localhost:8000/post');
    },
    editPost: async function () {
      this.sendPostData('PUT', `http://localhost:8000/post/${this.id}`);
    }
  }
}
</script>

<style scoped>
.form-container {
	display: grid;
	margin: 50px 300px;
	background-color: #242526;
	padding: 50px;
	border-radius: 25px;
	color: white;
}
</style>