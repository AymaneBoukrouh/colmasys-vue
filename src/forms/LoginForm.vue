<template>
  <form class="bg-dark" method="POST">
    <fieldset>
      <legend>Log In</legend>
      <div class="mb-3">
        <label class="form-label" for="user-id">User ID</label>
        <input class="form-control" name="user-id" type="text">
      </div>
      <div class="mb-3">
        <label class="form-label" for="password">Password</label>
        <input class="form-control" name="password" type="password">
      </div>
      <div class="mb-3">
        <input class="btn bg-dark text-white border border-primary border-3 w-100" type="submit" value="Submit">
    </div>
    </fieldset>
  </form>
</template>

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
