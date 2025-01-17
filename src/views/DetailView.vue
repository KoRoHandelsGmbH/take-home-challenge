<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import usePosts from '../composables/usePosts'
import { useDateFormat } from '@vueuse/core'
import BaseLoadingIndicator from '../components/BaseLoadingIndicator.vue';

const { selectedPost, loadPost, isLoading } = await usePosts();
const route = useRoute();
const router = useRouter();
const postId = route.params.id;

try {
    loadPost(postId as unknown as number);
} catch {
    router.push({ path: '/404' });
}
</script>

<template>
    <BaseLoadingIndicator v-if="isLoading" class="h-screen"></BaseLoadingIndicator>
    <div class="max-w-96 mx-auto" v-else>
        <h1 class="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {{ selectedPost?.title }}
        </h1>

        <ul class="flex flex-row space-x-6">
            <li class="mt-2 flex items-center text-sm text-gray-500">
                {{ selectedPost?.user?.name }} ({{ selectedPost?.user?.username }})
            </li>

            <li class="mt-2 flex items-center text-sm text-gray-500">
                {{ useDateFormat(new Date()) }}
            </li>
        </ul>

        <p class="mt-4 mb-4 max-w-4xl text-base/7 text-slate-700">
            {{ selectedPost?.body }}
        </p>
    </div>
</template>