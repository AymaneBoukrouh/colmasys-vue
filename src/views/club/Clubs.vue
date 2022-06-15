<template>
  <div class="main-divcol-12 d-flex flex-column">
    <div class="beautiful-box">
      <table id="clubs-table" class="stripe hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
      </table>
      <div class="w-100 text-center">
        <router-link class="btn btn-primary" to="/clubs/new">Register New Club</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted () {
    const response = await fetch('http://localhost:8000/clubs');
    this.clubs = await response.json();

    $('#clubs-table').DataTable({
      data: this.clubs.map(club => 
        [club.id, club.name]
      ),
      createdRow: (row, data) => {
        $(row).css('cursor', 'pointer')
        $(row).click(() => {
          const id = data[0];
          this.$router.push({name: 'EditClub', params: {id: id}});
        })
      }
    });
  },
  data () {
   return {
      clubs: null
   }
 }
}
</script>

<style scoped>
</style>