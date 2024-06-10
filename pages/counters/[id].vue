<script setup lang="ts">
const route = useRoute();
const { id } = route.params;
</script>

<template>
  <NuxtLayout>
    <ShowOneCounter :id="id as string" />
  </NuxtLayout>
</template>
