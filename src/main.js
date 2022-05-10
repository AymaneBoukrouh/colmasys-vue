import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Login from '@/views/Login.vue'

const routes = [
    { path: '/login', component: Login }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

createApp(App).use(router).mount('#app');
