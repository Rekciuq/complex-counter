<script setup lang="ts">
const route = useRoute();
const { id } = route.params;
console.log(localStorage.getItem("counters"));
</script>

<template>
  <ShowOneCounter :id="id as string" />
</template>
