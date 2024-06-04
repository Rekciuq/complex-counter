<script setup lang="ts">
type methodName = "increment" | "decrement";

interface ButtonProps {
  method: methodName;
  id: number;
}
const store = useCounterStore();
const props = defineProps<ButtonProps>();

function onClickHandler() {
  store[props.method](props.id);
}
</script>

<template>
  <button @click="onClickHandler">
    <slot />
  </button>
</template>
