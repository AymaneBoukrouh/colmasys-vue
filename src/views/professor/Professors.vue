<template>
  <div class="main-divcol-12 d-flex flex-column">
    <div class="beautiful-box">
      <table id="professors-table" class="stripe hover">
        <thead>
          <tr>
            <th>Professor ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Birthdate</th>
            <th>Gender</th>
          </tr>
        </thead>
      </table>
      <div class="w-100 text-center">
        <router-link class="btn btn-primary" to="/professors/new">Register New Professor</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted () {
    const response = await fetch('http://localhost:8000/professors');
    this.professors = await response.json();

    $('#professors-table').DataTable({
      data: this.professors.map(professor =>
        [professor.username, professor.firstname, professor.lastname,
        professor.email, professor.birthdate, professor.gender]
      ),
      createdRow: (row, data) => {
        $(row).css('cursor', 'pointer')
        $(row).click(() => {
          const username = data[0];
          this.$router.push({name: 'Professor', params: {username: username}});
        })
      }
    });
  },
  data () {
   return {
      professors: null
   }
 }
}
</script>

<style scoped>
</style>