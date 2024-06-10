<script setup lang="ts">
const { t } = useI18n();
const store = useCounterStore();
const counterName = ref("");
const checkError = ref(false);
const errorMessage = ref("");

function onClickHandler() {
  if (!counterName.value || counterName.value.length > 20) {
    if (!counterName.value) {
      errorMessage.value = "main-page.create-counter.validation.nothing";
    } else {
      errorMessage.value =
        "main-page.create-counter.validation.too-much-symbols";
    }
    checkError.value = true;
    counterName.value = "";
    return;
  }
  store.pushNewCounter(counterName.value);
  counterName.value = "";
}
</script>

<template>
  <div class="create-container">
    <p class="create__header">{{ t("main-page.create-counter.header") }}</p>
    <input
      :class="{ 'create__danger-border': checkError }"
      v-model="counterName"
      @input="checkError = false"
      :placeholder="t('main-page.create-counter.body')"
    />
    <button type="submit" @click.prevent="onClickHandler">
      Create new Counter!
    </button>
    <p class="create__error-handler" v-if="checkError">{{ t(errorMessage) }}</p>
  </div>
</template>
