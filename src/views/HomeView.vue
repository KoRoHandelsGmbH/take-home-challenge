<script setup lang="ts">
import { computed, ref } from 'vue';

import SmartList from '../components/SmartList.vue';

import usePosts from '../composables/usePosts';
import BaseInput from '../components/BaseInput.vue';
import BaseModal from '../components/BaseModal.vue';

const { posts, loadPosts } = await usePosts(); 
await loadPosts();

const searchTerm = ref<string>('');
const showDeleteModal = ref<boolean>(false);

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
    dataIndex: 'body',
}, {
    label: 'Actions',
    dataIndex: 'actions'
}]);

const filteredPosts = computed(() => {
    if (!searchTerm.value) {
        return posts.value;
    }

    return posts.value.filter((item) => {
        return [item.title, item.body].join('').includes(searchTerm.value)
    });
})

const invokeDelete = () => {
    showDeleteModal.value = true;
}

const invokeCancelDelete = () => {
    showDeleteModal.value = false;
}
</script>

<template>
    <div class="view__home">
        <BaseInput class="mb-4" v-model="searchTerm" placeholder="Enter search term...">
        </BaseInput>
        <SmartList :columns="columns" :items="filteredPosts" @delete="invokeDelete"></SmartList>
    </div>

    <BaseModal :show="showDeleteModal">
        <p class="text-sm text-gray-500">Are you sure you want to delete the selected post? All of your data will be permanently removed. This action cannot be undone.</p>

        <template #actions>
            <a href="#" @click.prevent="invokeCancelDelete" class="py-2 px-3 bg-white border border-gray-400 rounded">Cancel</a>
            <a href="#" @click.prevent="invokeCancelDelete" class="py-2 px-3 text-white bg-red-500 rounded">Delete</a>
        </template>
    </BaseModal>
</template>