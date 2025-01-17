<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
<nav class="bg-white border-gray-200">
  <div class="flex flex-wrap items-center justify-between mx-auto p-4 container">
    <RouterLink to="/" class="flex items-center space-x-3">
        <img src="../../assets/logo.svg" class="h-8" alt="Post management" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </RouterLink>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
        <li>
          <RouterLink to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">Home</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>