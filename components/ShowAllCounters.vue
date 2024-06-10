<script setup lang="ts">
const store = useCounterStore();
</script>
<template>
  <h2 v-if="!store.getAllCounters.length">There are now counters yet!</h2>
  <div class="counters-grid">
    <Counter
      v-for="counter in store.getAllCounters"
      :key="counter.id"
      :counter="counter"
    />
  </div>
</template>
