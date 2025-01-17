<script setup lang="ts">
defineProps<{
    columns: {
        label: string
    }[]
}>();
</script>

<template>
    <tr>
        <th scope="col" class="px-6 py-3" v-for="{ label } in columns" :key="label">
            {{ label }}
        </th>
    </tr>
</template>