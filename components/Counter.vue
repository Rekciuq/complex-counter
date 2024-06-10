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
  <NuxtLink
    class="counter-card__container"
    :to="{ name: 'counters-id', params: { id: props.counter.id } }"
  >
    <div class="counter-card__header">
      <p>{{ props.counter.name }}</p>
    </div>
    <div class="counter-card__body">
      <Button
        :method="'decrement'"
        :id="props.counter.id"
        class="counter-card__buttons--prev"
      >
        <IconsMinus />
      </Button>
      <p>{{ props.counter.count }}</p>
      <Button
        :method="'increment'"
        :id="props.counter.id"
        class="counter-card__buttons--next"
      >
        <IconsPlus />
      </Button>
    </div>
  </NuxtLink>
</template>
