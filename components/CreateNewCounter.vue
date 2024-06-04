<script setup lang="ts">
const { t } = useI18n();
const store = useCounterStore();
const counterName = ref("");

function onClickHandler() {
  if (!counterName.value) {
    return;
  }
  store.pushNewCounter(counterName.value);
  counterName.value = "";
}
</script>

<template>
  <div class="container">
    <p>{{ t("main-page.create-counter.header") }}</p>
    <input
      v-model="counterName"
      :placeholder="t('main-page.create-counter.body')"
    />
    <button type="submit" @click.prevent="onClickHandler">
      Create new Counter!
    </button>
  </div>
</template>
