<script setup lang="ts">
import { RouterView } from 'vue-router';
import BaseHeader from './components/Layout/BaseHeader.vue';
</script>

<template>
  <div class="app">
    <BaseHeader></BaseHeader>

    <div class="container mx-auto my-4">
      <Suspense>
        <RouterView></RouterView>
      </Suspense>
    </div>
  </div>
</template>