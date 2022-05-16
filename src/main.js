import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Students from '@/views/student/Students.vue'
import AddStudent from '@/views/student/AddStudent.vue'
import '/src/assets/js/bootstrap.js'

const routes = [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/students', component: Students },
    { path: '/students/new', component: AddStudent }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

createApp(App).use(router).mount('#app');
