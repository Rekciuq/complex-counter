<script setup lang="ts">
const route = useRoute();
const { id } = route.params;
</script>

<template>
  <NuxtLayout>
    <Header />
    <ShowOneCounter :id="id as string" />
  </NuxtLayout>
</template>
