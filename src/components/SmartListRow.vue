<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const get = (t: any, path: string) =>
    path.split(".").reduce((r, k) => r?.[k], t);

const props = defineProps<{
    columns: { label: string, dataIndex: string }[],
    item: any
}>();

const invokeClickRow = () => {
    router.push({
        path: `/detail/${props.item.id}`
    });
} 
</script>

<template>
    <tr class="odd:bg-white even:bg-gray-50 border-b cursor-pointer" @click="invokeClickRow">
        <th scope="row" class="px-6 py-4 font-normal" v-for="{ dataIndex } in columns" :key="`column-${dataIndex}-${JSON.stringify(item)}`">
            <slot :name="`column-${dataIndex}`">
                {{ get(item, dataIndex) }}
            </slot>
        </th>
    </tr>
</template>