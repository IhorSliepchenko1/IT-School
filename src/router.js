import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue'
import CoursesPage from './pages/CoursesPage.vue'
import AboutUsPage from './pages/AboutUsPage.vue'
import TryTheCourse from './pages/TryTheCoursePage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

export default createRouter({
    history: createWebHistory(),

    routes: [
        { path: '', redirect: { name: 'Home' } },
        { path: '/home', component: HomePage, name: 'Home' },
        { path: '/courses', component: CoursesPage, name: 'Courses' },
        { path: '/about', component: AboutUsPage, name: 'About' },
        { path: '/try-the-course', component: TryTheCourse, name: 'TryTheCourse' },
        { path: '/not-found', component: NotFoundPage, name: 'NotFound' },
        { path: '/:catchAll(.*)', redirect: { name: 'NotFound' } },
    ]
});
