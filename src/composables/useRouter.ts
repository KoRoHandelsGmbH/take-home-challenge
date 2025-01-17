import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from "../views/HomeView.vue"
import DetailView from '../views/DetailView.vue'
import NotFoundView from '../views/NotFoundView.vue';

export default function useRouter() {
    const routes = [
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
        { path: '/', component: HomeView },
        { path: '/detail/:id', component: DetailView }
    ];

    const router = createRouter({
        history: createWebHashHistory(),
        routes
    });

    return {
        router
    }
} 