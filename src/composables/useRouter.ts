import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from "../views/HomeView.vue"

export default function useRouter() {
    const routes = [
        { path: '/', component: HomeView }
    ];

    const router = createRouter({
        history: createMemoryHistory(),
        routes
    });

    return {
        router
    }
} 