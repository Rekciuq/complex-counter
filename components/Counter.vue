<script setup lang="ts">
interface CounterProps {
  counter: {
    id: number;
    name: string;
    count: number;
  };
}

const props = defineProps<CounterProps>();
</script>

<template>
  <div class="counter">
    <div class="counter__header">{{ props.counter.name }}</div>
    <div class="counter__body">{{ props.counter.count }}</div>
    <div class="counter__buttons">
      <Button
        :method="'decrement'"
        :id="props.counter.id"
        class="counter__buttons--prev"
      >
        <IconsMinus />
      </Button>
      <Button
        :method="'increment'"
        :id="props.counter.id"
        class="counter__buttons--next"
      >
        <IconsPlus />
      </Button>
    </div>
  </div>
</template>
