<script setup>
import CardStats from '@/components/CardStats.vue';
import Plotly from 'plotly.js-dist/plotly';
</script>

<template>
<div class="admin-dashboard-grid-container">
  <CardStats link='/professors' icon='person-workspace' color='darkgreen' text='Professors' :value='data.professors' />
  <CardStats link='/students' icon='person' color='orange' text='Students' :value='data.students' />
  <div class="beautiful-box admin-dashboard-majors-students">
    <h3>Majors</h3>
    <div id="majors-students-chart"></div>
  </div>
  <div class="admin-dashboard-messages d-flex flex-row">
    <div class="beautiful-box flex-fill">
      <div class="beautiful-box-title mb-3">Student Messages (2)</div>
      <div class="beautiful-box-numbers mb-2">
        <b>1</b><br><a class="link-secondary" href="">Achraf Zakaria El Assali</a>
        <!-- if more than 5, show a button 'view all (7 more messages)' -->
        <!-- show urgent messages in red -->
      </div>
      <div class="beautiful-box-numbers mb-2">
        <b>3</b><br><a class="link-secondary" href="">Omar Ben Sabih El Imrany</a>
      </div>
    </div>
    <div class="beautiful-box flex-fill">
      <div class="beautiful-box-title mb-3">Professor Messages (0)</div>
      <div class="alert alert-info text-center">You have no messages.</div>
    </div>
  </div>
  <CardStats link='/classes' icon='table' color='darkgray' text='Classes' :value='data.classes' />
  <CardStats link='/clubs' icon='people' color='green' text='Clubs' :value='5' />
  <CardStats link='/clubs' icon='book' color='orange' text='Majors' :value='4' />
  <CardStats link='/subjects' icon='card-checklist' color='red' text='Subjects' :value='27' />
  <div class="beautiful-box admin-dashboard-attendance">
    <h3>Attendance (Last 7 days)</h3>
      <div id="attendance-chart" style="width: 90%;"></div>
  </div>
  <div class="beautiful-box admin-dashboard-events">
    <h4><b>Events</b></h4>
    <div class="d-flex flex-row gap-3">
      <div id="events-calendar" style="box-shadow: none !important;"></div>
      <div class="flex-grow-1 events-info" style="overflow-y: auto;">
        <div style="font-size: 22px">June 2022 (1 event)</div>
        <!--<div class="alert alert-light text-center">There aren't any events for this month.</div>-->
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="mb-2 fw-bold">Friday 24th</div>
            <div class="beautiful-box-numbers mb-2"><b>Prof. Hassan Badir</b><br><a class="link-secondary" href="">Professor</a></div>
            <div class="beautiful-box-numbers mb-2"><b>63</b><br><a class="link-secondary" href="">Participants</a></div>
            <div class="beautiful-box-numbers mb-2"><b>10:00 -> 12:00</b><br><a class="link-secondary" href="">Time</a></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Calendar from 'color-calendar';

export default {
  async created () {
    //const response = await fetch('http://localhost:5000/admin/dashboard');
    //const payments_chart = await response.json();
    //Plotly.newPlot('payments-chart', payments_chart);
    //alert(payments_chart);
  },
  async mounted () {
    const response = await fetch('http://localhost:8000/dashboard');
    this.data = await response.json();

    Plotly.newPlot('majors-students-chart', JSON.parse(this.data.majors_students_chart));
    Plotly.newPlot('attendance-chart', JSON.parse(this.data.attendance_chart));

    new Calendar({
      id: '#events-calendar',
      eventsData: [
        {
          start: '2022-06-24T10:00:00',
          end: '2022-06-24T12:00:00',
          name: 'Soutenance PFA',
        }
      ]
    });
  },
  async created () {
    $(".events-info").css("height", $('.color-calendar').height());
  },
  data () {
   return {
      data: {
        'professors': 0,
        'students': 0,
        'classes': 0
      }
   }
 }
  
}
</script>

<style scoped>
.admin-dashboard-grid-container {
    display: grid;
    grid-template-columns: 4fr 4fr 3fr 3fr 10fr;
    grid-template-rows: auto auto auto auto auto;
    gap: 5px;
}

.admin-dashboard-majors-students {
    grid-column: 3/5;
    grid-row: 1/4;
}

.admin-dashboard-messages {
    grid-column: 5/6;
    grid-row: 1/4;
    gap: 5px;
}

.admin-dashboard-attendance {
    grid-column: 1/4;
    grid-row: 4/5;   
}

.admin-dashboard-events {
    grid-column: 4/6;
    grid-row: 4/5;
}
</style>