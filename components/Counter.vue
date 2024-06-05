<script setup lang="ts">
interface CounterProps {
  counter: {
    id: string;
    name: string;
    count: number;
  };
}

const props = defineProps<CounterProps>();
</script>

<template>
  <div class="counter">
    <NuxtLink :to="{ name: 'counters-id', params: { id: props.counter.id } }">
      <div class="counter__header">{{ props.counter.name }}</div>
      <div class="counter__body">
        <p>{{ props.counter.count }}</p>
      </div>
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
    </NuxtLink>
  </div>
</template>
