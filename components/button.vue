<script setup lang="ts">
type methodName = "plus" | "minus";

interface ButtonProps {
  method: methodName;
  id: string;
}
const props = defineProps<ButtonProps>();

function onClickHandler() {
  useFetch(`/api/test/${props.id}`, {
    method: "patch",
    body: {
      method: props.method,
    },
  });
}
</script>

<template>
  <button @click="onClickHandler">
    <slot />
  </button>
</template>
