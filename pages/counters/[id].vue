<script setup lang="ts">
const route = useRoute();
const { id } = route.params;
</script>

<template>
  <ShowOneCounter :id="id as string" />
</template>
