<template>
  <div>
    <div class=" fixed w-full bg-gray-800 p-2 flex justify-between space-x-6 items-end z-10">
    <div class="text-gray-100 font-semibold flex space-x-2">
    <img src="/assets/img/toyota-logo.png" class="w-10 h-10" alt="">
    <span class="mt-2">Toyota Mobility Solutions Philippines</span>
    </div>
    <div class="flex space-x-6" >
        <div class="p-2 hover:bg-gray-500 hover:text-black">
        <NuxtLink to="/" class="text-gray-100 text-sm"> Home </NuxtLink>
    </div>
    <div class="p-2 hover:bg-gray-500 hover:text-black">
        <NuxtLink to="/authors" class="text-gray-100 text-sm"> Authors </NuxtLink>
    </div>
    <div class="p-2 hover:bg-gray-500 hover:text-black">
        <NuxtLink to="/news" class="text-gray-100 text-sm"> News </NuxtLink>
    </div>
    <div class="p-2 hover:bg-gray-500 hover:text-black">
        <NuxtLink to="" class="text-gray-100 text-sm"> Contact Us </NuxtLink>
    </div>
    
    </div>


    </div>

    <main class="p-4 mx-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
