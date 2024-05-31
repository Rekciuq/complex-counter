<script setup lang="ts">
const countersArray = await useFetch("/api/test").data;

function giveCounter(counter: { name: string; count: string }, id: string) {
  return { name: counter.name, count: counter.count, id };
}
</script>
<template>
  <h2>{{ countersArray }}</h2>
  <Counter
    v-for="(counter, index) in countersArray"
    :key="index"
    :counter="giveCounter(counter, index)"
  />
</template>
