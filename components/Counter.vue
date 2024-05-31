<script setup lang="ts">
interface CounterProps {
  counter: {
    id: string;
    name: string;
    count: string;
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
        :method="'minus'"
        :id="props.counter.id"
        class="counter__buttons--prev"
      >
        <IconsMinus />
      </Button>
      <Button
        :method="'plus'"
        :id="props.counter.id"
        class="counter__buttons--next"
      >
        <IconsPlus />
      </Button>
    </div>
  </div>
</template>
