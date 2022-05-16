<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">COLMASYS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle Menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-content">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link active">Dashboard</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbar-management" role="button" data-bs-toggle="dropdown" aria-expanded="false">Management</a>
            <ul class="dropdown-menu" aria-labelledby="navbar-management">
              <li><router-link to="/" class="dropdown-item">Professors</router-link></li>
              <li><router-link to="/students" class="dropdown-item">Students</router-link></li>
              <li><router-link to="/" class="dropdown-item">Clubs</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid p-2">
    <!--<div class="row g-2">
    </div>-->
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
