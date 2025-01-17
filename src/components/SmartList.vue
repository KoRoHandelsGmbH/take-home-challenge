<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SmartListHeader from './SmartListHeader.vue';
import SmartListRow from './SmartListRow.vue';

defineProps<{
    columns: { label: string, dataIndex: string }[],
    items: any[]
}>();

const emit = defineEmits<{
    (e: 'delete', id: number): void
}>();

const invokeDelete = (id: number) => {
    emit('delete', id);
}
</script>

<template>
    <table class="w-full text-sm text-left">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <slot name="header">
                <SmartListHeader :columns="columns"></SmartListHeader>
            </slot>
        </thead>

        <tbody>
            <SmartListRow v-for="item in items" :item="item" :columns="columns" :key="item.id">
                <template #column-user.name v-slot="item">
                    {{ item.user.name }} ({{ item.user.username }})
                </template>
                <template #column-title v-slot="item">
                    <RouterLink :to="`/detail/${item.id}`" class="underline text-blue-700">{{ item.title }}</RouterLink>
                </template>
                <template #column-actions>
                    <a href="#" @click.prevent="invokeDelete(item.id)" class="py-2 px-3 text-white bg-red-500 rounded">Delete</a>
                </template>
            </SmartListRow>
        </tbody>
    </table>
</template>