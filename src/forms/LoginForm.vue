<template>
  <form @submit.prevent="onSubmit" class="bg-dark" method="POST">
    <fieldset>
      <legend>Log In</legend>
      <div class="mb-3">
        <label class="form-label" for="user-id">User ID</label>
        <input class="form-control" name="user-id" v-model="username" type="text">
      </div>
      <div class="mb-3">
        <label class="form-label" for="password">Password</label>
        <input class="form-control" name="password" v-model="password" type="password">
      </div>
      <div class="mb-3">
        <input class="btn bg-dark text-white border border-primary border-3 w-100" type="submit" value="Submit">
    </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit: async function () {
      await fetch('http://localhost:8000/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: this.username, password: this.password})
    }).then((response) => response.json()
        .then((data) => {
          localStorage.token = data.token;
          localStorage.isAuthenticated = JSON.stringify(true);
          this.$router.go({name: 'Dashboard'});
        })
    );

    }
  },
  data () {
    return {
      username: null,
      password: null
    }
  }
}
</script>

<style scoped>
form {
    width: 500px;
    color: white;
    padding: 30px;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 5px;
}

legend {
    text-align: center;
}
</style>
