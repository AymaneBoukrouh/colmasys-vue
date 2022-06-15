<template>
  <div class="user-profile bg-dark">
    <div class="user-imb">
      <img class="user-image responsive" src="https://source.unsplash.com/user/c_v_r/1900x800">
      <router-link class="btn btn-primary user-button" :to="{name: 'EditProfessor', params: {username: this.username}}">Edit</router-link>
    </div>
    <div class="user-info">
      <h2>{{ username }}</h2>
      <hr>
      <span><b>ID: </b>ID<br></span>
      <span><b>Full Name: </b>FIRSTNAME + LASTNAME<br></span>
      <span><b>Email: </b>EMAIL<br></span>
      <span><b>Gender: </b>GENDER<br></span>
    </div>
  </div>
  <section class="posts">
  user posts
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: this.$route.params.username
    }
  }
}
</script>

<style scoped>
.user-profile {
	display: grid;
	grid-template-columns: 200px auto;
	margin: 0 500px;
	padding: 50px;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	border-bottom-left-radius: 50px;
	border-bottom-right-radius: 50px;
	color: white;
}

.user-imb {
	display: inline-grid;
	grid-column: 1/2;
	grid-row: 1/2;
}

.user-image {
	border-radius: 50%;
	width: 200px;
	height: 200px;
	object-fit: cover;
}

.user-button {
	margin-top: 20px;
}

.user-info {
	display: inline-grid;
	margin-left: 50px;
	padding-left: 20px;
	grid-column: 2/3;
	grid-row: 1/2;
}
</style>