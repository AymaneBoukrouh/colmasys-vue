<template>
  <nav v-if="isAuthenticated" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">COLMASYS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle Menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-content">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbar-management" role="button" data-bs-toggle="dropdown" aria-expanded="false">Management</a>
            <ul class="dropdown-menu" aria-labelledby="navbar-management">
              <li><router-link to="/professors" class="dropdown-item">Professors</router-link></li>
              <li><router-link to="/students" class="dropdown-item">Students</router-link></li>
              <li><router-link to="/clubs" class="dropdown-item">Clubs</router-link></li>
              <li><router-link to="/classes" class="dropdown-item">Classes</router-link></li>
              <li><router-link to="/classes" class="dropdown-item">Majors</router-link></li>
              <li><router-link to="/subjects" class="dropdown-item">Subjects</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link" active-class="active">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/feed" class="nav-link" active-class="active">Feed</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chats" class="nav-link" active-class="active">Chats</router-link>
          </li>
        </ul>
      </div>
      <div class="dropdown">
				<button type="button" id="user-menu" data-bs-toggle="dropdown" aria-expanded="false">
					<!--<i class="bi bi-person-circle"></i>-->
          Admin&ensp;<img class="profile-picture" src="https://picsum.photos/id/1006/200/200">
				</button>
				<div class="dropdown-menu dropdown-menu-end" aria-labelledby="user-menu">
					<router-link :to="{ name: 'AddPost' }" class="dropdown-item">Profile</router-link>
          <router-link :to="{ name: 'AddPost' }" class="dropdown-item">Create Post</router-link>
          <button @click="logoutUser" class="dropdown-item text-red" href="">Log Out</button>
				</div>
			</div>
    </div>
  </nav>
  <div v-if="isAuthenticated" class="container-fluid p-2">
    <!--<div class="row g-2">
    </div>-->
    <router-view></router-view>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    logoutUser: async function () {
      localStorage.removeItem('token');
      localStorage.setItem('isAuthenticated', false);
      this.$router.go({name: 'Login'});
      //console.log('test');
    }
  },
  data () {
    return {
      isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated'))
    }
  }
}
</script>

<style scoped>
#user-menu {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
}

.profile-picture {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

</style>
