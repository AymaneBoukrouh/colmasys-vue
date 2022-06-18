<template>
  <div class="main-divcol-12 d-flex flex-column">
    <div class="beautiful-box">
      <table id="classes-table" class="stripe hover">
        <thead>
          <tr>
            <th>Class</th>
            <th>Students</th>
            <th>Professors</th>
            <th>Subjects</th>
          </tr>
        </thead>
      </table>
      <div class="w-100 text-center">
        <router-link class="btn btn-primary" to="/classes/new">Register New Class</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted () {
    const response = await fetch('http://localhost:8000/classes');
    this.classes = await response.json();

    $('#classes-table').DataTable({
      data: this.classes.map(class_ => 
        [class_.name, class_.number_of_students, class_.number_of_professors, class_.number_of_subjects]
      ),
      createdRow: (row, data) => {
        $(row).css('cursor', 'pointer')
        $(row).click(() => {
          const id = data[0];
          this.$router.push({name: 'EditClass', params: {id: id}});
        })
      }
    });
  },
  data () {
   return {
      classes: null
   }
 }
}
</script>

<style scoped>
</style>