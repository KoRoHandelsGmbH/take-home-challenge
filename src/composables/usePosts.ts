import { ref } from 'vue';
import type { Post } from '#index';  
import useUsers from './useUsers';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const posts = ref<Post[]>([]);
const selectedPost = ref<Post>();

export default async function usePosts() {
    const { users, loadUsers } = useUsers();
    const isLoading = ref<boolean>(false);

    await loadUsers();

    const loadPosts = async (): Promise<void> => {
        isLoading.value = true;

        try {
            const response = await fetch(`${BASE_URL}/posts`)
            const fetchedPosts = await response.json();
            posts.value = fetchedPosts.map((post: Post) => {
                post.user = users.value.find((user) => {
                    return post.userId === user.id;
                });
                return post;
            });
        } catch(err) {
            console.error(err);
        } finally {
            isLoading.value = false;
        }
    }

    const loadPost = async (id: number): Promise<void> => {
        isLoading.value = true;

        try {
            const response = await fetch(`${BASE_URL}/posts/${id}`)
            if (!response.ok) {
                throw new Error('Post not found');
            }
            const fetchedPost = await response.json();
            fetchedPost.user = users.value.find((user) => {
                return fetchedPost.userId === user.id;
            });
            selectedPost.value = fetchedPost;
        } catch(err) {
            throw new Error('Post not found');
        } finally {
            isLoading.value = false;
        }
    }

    return {
        posts,
        selectedPost,
        isLoading,
        loadPosts,
        loadPost
    }
}