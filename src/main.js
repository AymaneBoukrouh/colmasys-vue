import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Students from '@/views/student/Students.vue'
import Student from '@/views/student/Student.vue'
import AddStudent from '@/views/student/AddStudent.vue'
import EditStudent from '@/views/student/EditStudent.vue'
import '/src/assets/js/bootstrap.js'

const routes = [
    { path: '/', name: 'Root', component: Login },
    { path: '/login', name: 'Login', component: Login },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/students', name: 'Students', component: Students },
    { path: '/students/new', name: 'AddStudent', component: AddStudent },
    { path: '/students/edit/:username', name: 'EditStudent', component: EditStudent },
    { path: '/students/:username', name: 'Student', component: Student }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

createApp(App).use(router).mount('#app');
