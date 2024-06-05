<script setup lang="ts">
interface CounterProps {
  id: string;
}
const props = defineProps<CounterProps>();
const store = useCounterStore();

const counter = store.getSingleCounter(props.id);
if (!counter) {
  navigateTo("/");
}
</script>

<template>
  <h1>{{ counter }}</h1>
</template>
