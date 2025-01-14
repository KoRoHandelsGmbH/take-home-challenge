import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import useRouter from './composables/useRouter'

const { router } = useRouter();

createApp(App).use(router).mount('#app')
