<template>
  <div class="main-divcol-12 d-flex flex-column">
    <div class="beautiful-box">
      <table id="subjects-table" class="stripe hover">
        <thead>
          <tr>
            <th>Subject ID</th>
            <th>Name</th>
          </tr>
        </thead>
      </table>
      <div class="w-100 text-center">
        <router-link class="btn btn-primary" to="/subjects/new">Register New Subject</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted () {
    const response = await fetch('http://localhost:8000/subjects');
    this.subjects = await response.json();

    $('#subjects-table').DataTable({
      data: this.subjects.map(subject => 
        [subject.id, subject.name]
      ),
      createdRow: (row, data) => {
        $(row).css('cursor', 'pointer')
        $(row).click(() => {
          const id = data[0];
          this.$router.push({name: 'EditSubject', params: {id: id}});
        })
      }
    });
  },
  data () {
   return {
      subjects: null
   }
 }
}
</script>

<style scoped>
</style>