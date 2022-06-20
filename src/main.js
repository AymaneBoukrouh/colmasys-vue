import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Feed from '@/views/Feed.vue'
import Students from '@/views/student/Students.vue'
import Student from '@/views/student/Student.vue'
import AddStudent from '@/views/student/AddStudent.vue'
import EditStudent from '@/views/student/EditStudent.vue'
import Professors from '@/views/professor/Professors.vue'
import Professor from '@/views/professor/Professor.vue'
import AddProfessor from '@/views/professor/AddProfessor.vue'
import EditProfessor from '@/views/professor/EditProfessor.vue'
import Classes from '@/views/class/Classes.vue'
import AddClass from '@/views/class/AddClass.vue'
import EditClass from '@/views/class/EditClass.vue'
import Clubs from '@/views/club/Clubs.vue'
import Club from '@/views/club/Club.vue'
import AddClub from '@/views/club/AddClub.vue'
import EditClub from '@/views/club/EditClub.vue'
import Post from '@/views/post/Post.vue'
import AddPost from '@/views/post/AddPost.vue'
import EditPost from '@/views/post/EditPost.vue'
import '/src/assets/js/bootstrap.js'

const routes = [
    { path: '/', name: 'Root', component: Login },
    { path: '/login', name: 'Login', component: Login },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/feed', name: 'Feed', component: Feed },
    { path: '/students', name: 'Students', component: Students },
    { path: '/students/new', name: 'AddStudent', component: AddStudent },
    { path: '/students/edit/:username', name: 'EditStudent', component: EditStudent },
    { path: '/students/:username', name: 'Student', component: Student },
    { path: '/professors', name: 'Professors', component: Professors },
    { path: '/professors/new', name: 'AddProfessor', component: AddProfessor },
    { path: '/professors/edit/:username', name: 'EditProfessor', component: EditProfessor },
    { path: '/professors/:username', name: 'Professor', component: Professor },
    { path: '/classes', name: 'Classes', component: Classes },
    { path: '/classes/new', name: 'AddClass', component: AddClass },
    { path: '/classes/edit/:id', name: 'EditClass', component: EditClass },
    { path: '/clubs', name: 'Clubs', component: Clubs },
    { path: '/clubs/new', name: 'AddClub', component: AddClub },
    { path: '/clubs/edit/:id', name: 'EditClub', component: EditClub },
    { path: '/clubs/:id', name: 'Club', component: Club },
    { path: '/posts/new', name: 'AddPost', component: AddPost },
    { path: '/posts/edit/:id', name: 'EditPost', component: EditPost },
    { path: '/posts/:id', name: 'Post', component: Post },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

createApp(App).use(router).mount('#app');
