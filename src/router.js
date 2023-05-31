import { createRouter, createWebHistory } from "vue-router";

import MyHome from './pages/MyHome.vue';
import MyContact from './pages/MyContact.vue';
import MyPostList from './pages/MyPostList.vue';
import MySinglePost from './pages/MySinglePost.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: MyHome
            },
            {
                path: '/contattami',
                name: 'contact',
                component: MyContact
            },
            {
                path: '/progetti',
                name: 'projects',
                component: MyPostList
            },
            {
                path: '/progetti/:slug',
                name: 'single-project',
                component: MySinglePost
            }
        ]
    }
);

export { router };