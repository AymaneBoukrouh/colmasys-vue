<template>
  <div class="main-divcol-12 d-flex flex-column">
    <div class="beautiful-box">
      <table id="classes-table" class="stripe hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Major</th>
            <th>Year</th>
            <th>Group</th>
            <th>Academic Year</th>
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
        [class_.id, class_.major, class_.year, class_.group, class_.academic_year]
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