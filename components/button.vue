<script setup lang="ts">
type methodName = "increment" | "decrement";

interface ButtonProps {
  method: methodName;
  id: string;
}
const store = useCounterStore();
const props = defineProps<ButtonProps>();

function onClickHandler() {
  store[props.method](props.id);
}
</script>

<template>
  <button @click.prevent="onClickHandler">
    <slot />
  </button>
</template>
