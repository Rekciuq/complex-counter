<script setup lang="ts">
import type { NavigationQuery } from "../types/navigationQuery";
const route = useRoute();
const showAnimation = ref(false);

onMounted(() => {
  const query = route.query as NavigationQuery;
  if (query.counterRemoved) {
    showAnimation.value = true;
  }
});
</script>
<template>
  <NuxtLayout>
    <div class="container">
      <Dashboard />
      <RemovePopup :showAnimation="showAnimation" />
    </div>
  </NuxtLayout>
</template>
