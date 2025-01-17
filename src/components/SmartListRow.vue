<script lang="ts" setup>
const get = (t: any, path: string) =>
    path.split(".").reduce((r, k) => r?.[k], t);

defineProps<{
    columns: { label: string, dataIndex: string }[],
    item: any
}>();
</script>

<template>
    <tr class="odd:bg-white even:bg-gray-50 border-b">
        <th scope="row" class="px-6 py-4 font-normal" v-for="{ dataIndex }, i in columns" :key="`column-${dataIndex}-${i}`">
            <slot :name="`column-${dataIndex}`" v-bind="item">
                {{ get(item, dataIndex) }}
            </slot>
        </th>
    </tr>
</template>