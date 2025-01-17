<script setup lang="ts">
import { computed, ref } from 'vue';

import SmartList from '../components/SmartList.vue';

import usePosts from '../composables/usePosts';
import BaseInput from '../components/BaseInput.vue';
import BaseModal from '../components/BaseModal.vue';

const { posts, loadPosts } = await usePosts(); 
await loadPosts();

const searchTerm = ref<string>('');

const columns = ref<{ label: string, dataIndex: string }[]>([{
    label: '#',
    dataIndex: 'id'
}, {
    label: 'Author',
    dataIndex: 'user.name'
}, {
    label: 'Title',
    dataIndex: 'title'
}, {
    label: 'Body',
    dataIndex: 'body'
}]);

const filteredPosts = computed(() => {
    if (!searchTerm.value) {
        return posts.value;
    }

    return posts.value.filter((item) => {
        return [item.title, item.body].join('').includes(searchTerm.value)
    });
})

</script>

<template>
    <div class="view__home">
        <BaseInput class="mb-4" v-model="searchTerm" placeholder="Enter search term...">
        </BaseInput>
        <SmartList :columns="columns" :items="filteredPosts"></SmartList>
    </div>

    <BaseModal></BaseModal>
</template>