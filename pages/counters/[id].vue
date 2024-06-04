<script setup lang="ts">
const route = useRoute();
const { id } = route.params;
const finalId = parseInt(id as string);
</script>

<template>
  <ShowOneCounter :id="finalId" />
</template>
