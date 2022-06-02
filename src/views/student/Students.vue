<template>
  <div class="main-divcol-12 d-flex flex-column">
    <div class="beautiful-box">
      <table id="students-table" class="stripe hover">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Birthdate</th>
            <th>Gender</th>
            <th>Profile</th>
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
        [student.username, student.firstname, student.lastname,
        student.email, student.birthdate, student.gender, student.id]
      )
    });

    $(".student-link").click(function() {
      window.location = $(this).data("href");
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