import { createRouter, createWebHistory } from "vue-router";
import MyHome from './pages/MyHome.vue';
import MyContact from './pages/MyContact.vue';
import MyPostList from './pages/MyPostList.vue';
const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                componets: MyHome
            },
            {
                path: '/contattami',
                name: 'contact',
                componets: MyContact
            },
            {
                path: '/progetti',
                name: 'projects',
                componets: MyPostList
            }
        ]
    }
);

export { router };