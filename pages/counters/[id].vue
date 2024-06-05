<script setup lang="ts">
definePageMeta({
  middleware: ["verify-counter-id"],
});
const route = useRoute();
const { id } = route.params;
</script>

<template>
  <ShowOneCounter :id="id as string" />
</template>
