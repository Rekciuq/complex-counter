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

function onClickHandler() {
  store.removeCounter(props.id);
  navigateTo("/");
}
</script>

<template>
  <div class="counter-container">
    <p class="counter__header">{{ counter!.name }}</p>
    <div class="counter-body">
      <Button :method="'decrement'" :id="counter!.id"><IconsMinus /></Button>
      <p>{{ counter!.count }}</p>
      <Button :method="'increment'" :id="counter!.id"><IconsPlus /></Button>
    </div>
    <button class="counter-remove__button" @click="onClickHandler">
      Remove Counter
    </button>
  </div>
</template>
