<template>
  <div class="main-divcol-12 d-flex flex-column">
    <div class="beautiful-box">
      <table id="students-table" class="stripe hover">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Class</th>
            <th>Gender</th>
          </tr>
        </thead>
      </table>
      <div class="w-100 text-center">
        <router-link class="btn btn-primary" to="/students/new">Register New Student</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted () {
    const response = await fetch('http://localhost:8000/students');
    this.students = await response.json();

    $('#students-table').DataTable({
      data: this.students.map(student =>
        [student.username, student.firstname, student.lastname, student.class, student.gender]
      ),
      createdRow: (row, data) => {
        $(row).css('cursor', 'pointer')
        $(row).click(() => {
          const username = data[0];
          this.$router.push({name: 'Student', params: {username: username}});
        })
      }
    });
  },
  data () {
   return {
      students: null
   }
 }
}
</script>

<style scoped>
</style>