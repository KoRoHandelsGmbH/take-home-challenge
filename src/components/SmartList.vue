<script setup lang="ts">
import SmartListHeader from './SmartListHeader.vue';
import SmartListRow from './SmartListRow.vue';

defineProps<{
    columns: { label: string, dataIndex: string }[],
    items: any[]
}>();
</script>

<template>
    <table class="w-full text-sm text-left">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <slot name="header">
                <SmartListHeader :columns="columns"></SmartListHeader>
            </slot>
        </thead>

        <tbody>
            <SmartListRow v-for="item in items" :item="item" :columns="columns" :key="item.id"></SmartListRow>
        </tbody>
    </table>
</template>