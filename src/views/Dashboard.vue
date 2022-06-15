<script setup>
import CardStats from '@/components/CardStats.vue';
import Plotly from 'plotly.js-dist/plotly';
</script>

<template>
<div class="admin-dashboard-grid-container">
  <CardStats link='/professors' icon='person-workspace' color='darkgreen' text='Professors' :value=data.professors />
  <CardStats link='/students' icon='person' color='orange' text='Students' :value=data.students />
  <div class="beautiful-box admin-dashboard-payments">
    <h3>Majors</h3>
    <div id="payments-chart"></div>
    <div class="d-flex flex-row justify-content-between align-items-center">
      <div>
        <div style="background-color: cyan; width: 50px; height: 5px; border-radius: 20px;"></div>
        <div>Received (241)</div>
        <div><b>$353,740</b></div>
      </div>
      <div class="d-flex" style="height: 40px;">
        <div class="vr"></div>
      </div>
      <div>
        <div style="background-color: orange; width: 50px; height: 5px; border-radius: 20px;"></div>
        <div>Pending (39)</div>
        <div><b>$140,525</b></div>
      </div>
    </div>
  </div>
  <div class="admin-dashboard-messages d-flex flex-row">
    <div class="beautiful-box flex-fill">
      <div class="beautiful-box-title mb-3">Student Messages</div>
      <div class="beautiful-box-numbers mb-2">
        <b>3</b><br><a class="link-secondary" href="">Alan Marksman (Student)</a>
        <!-- if more than 5, show a button 'view all (7 more messages)' -->
        <!-- show urgent messages in red -->
      </div>
      <div class="beautiful-box-numbers mb-2">
        <b>2</b><br><a class="link-secondary" href="">John Doe (Student)</a>
      </div>
      <div class="beautiful-box-numbers mb-2">
        <b>2</b><br><a class="link-secondary" href="">Maurice Ashley (Professor)</a>
      </div>
    </div>
    <div class="beautiful-box flex-fill">
      <div class="beautiful-box-title mb-3">Professor Messages</div>
      <div class="beautiful-box-numbers mb-2">
        <b>3</b><br><a class="link-secondary" href="">Alan Marksman (Student)</a>
        <!-- if more than 5, show a button 'view all (7 more messages)' -->
        <!-- show urgent messages in red -->
      </div>
      <div class="beautiful-box-numbers mb-2">
        <b>2</b><br><a class="link-secondary" href="">John Doe (Student)</a>
      </div>
      <div class="beautiful-box-numbers mb-2">
        <b>2</b><br><a class="link-secondary" href="">Maurice Ashley (Professor)</a>
      </div>
    </div>
  </div>
  <CardStats link='/classes' icon='person' color='lightgray' text='Classes' :value=data.classes />
  <CardStats link='/clubs' icon='people' color='green' text='Clubs' :value=-1 />
  <CardStats link='/' icon='currency-dollar' color='orange' text='Payments' :value=-1 />
  <CardStats link='/' icon='card-checklist' color='yellow' text='Reports' :value=-1 />
  <div class="beautiful-box admin-dashboard-attendance">
    <h3>Attendance (Last 7 days)</h3>
      <div id="attendance-chart" style="width: 90%;"></div>
  </div>
  <div class="beautiful-box admin-dashboard-events">
    <h4><b>Events</b></h4>
    <div class="d-flex flex-row gap-3">
      <div id="events-calendar" style="box-shadow: none !important;"></div>
      <div class="flex-grow-1 events-info" style="overflow-y: auto;">
        <div style="font-size: 22px">February 2022 (1 event)</div>
        <!--<div class="alert alert-light text-center">There aren't any events for this month.</div>-->
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="mb-2 fw-bold">Saturday 19th</div>
            <div class="beautiful-box-numbers mb-2"><b>Computer Sciences</b><br><a class="link-secondary" href="">Club</a></div>
            <div class="beautiful-box-numbers mb-2"><b>46</b><br><a class="link-secondary" href="">Participants</a></div>
            <div class="beautiful-box-numbers mb-2"><b>10:00 -> 12:00</b><br><a class="link-secondary" href="">Time</a></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
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

.admin-dashboard-payments {
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