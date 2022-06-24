<template>
  <div class="user-profile bg-dark">
    <div class="user-imb">
      <img class="user-image responsive" src="https://source.unsplash.com/user/c_v_r/1900x800">
      <router-link class="btn btn-primary user-button" :to="{name: 'EditStudent', params: {username: this.username}}">Edit</router-link>
    </div>
    <div class="user-info">
      <h2>{{ username }}</h2>
      <hr>
      <span><b>Full Name: </b>{{ firstname }} {{ lastname }}<br></span>
      <span><b>Email: </b>{{ email }}<br></span>
      <span><b>Gender: </b>{{ gender }}<br></span>
      <span><b>Class: </b>{{ class_ }}<br></span>
    </div>
  </div>
  <section class="posts">
  user posts
  </section>
</template>

<script>
export default {
  async mounted () {
    await fetch(`http://localhost:8000/student/username/${this.username}`)
      .then((response) => response.json()
        .then((data) => {
          this.firstname = data.firstname;
          this.lastname = data.lastname;
          this.email = data.email;
          this.gender = data.gender;
          this.class_ = data.class;
        })
      )
  },
  data() {
    return {
      username: this.$route.params.username,
      firstname: null,
      lastname: null,
      email: null,
      gender: null,
      class_: null
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