import { ref } from 'vue';
import type { User } from '#index';  

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const users = ref<User[]>([]);

export default function useUsers() {
    const isLoading = ref<boolean>(false);

    const loadUsers = async (): Promise<void> => {
        if (users.value && users.value.length > 0) {
            return;
        }

        isLoading.value = true

        try {
            const response = await fetch(`${BASE_URL}/users`)
            users.value = await response.json();
        } catch(err) {
            console.error(err);
        } finally {
            isLoading.value = false;
        }
    }

    return {
        users,
        isLoading,
        loadUsers,
    }
}