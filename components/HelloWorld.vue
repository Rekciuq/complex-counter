<script setup lang="ts">
import { ref } from "vue";

interface Person {
  id: number;
}

const value = ref(0);

const highLevel = ref<Person>({ id: 15 });

const { id } = highLevel.value;
</script>

<template>
  <div class="">
    <h1>Hello world</h1>
    <h2>{{ id }}</h2>
    <h3>{{ value }}</h3>
  </div>
</template>

<style></style>
