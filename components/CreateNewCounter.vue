<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="container">
    <p>{{ t("main-page.create-counter.header") }}</p>
    <input :placeholder="t('main-page.create-counter.body')" />
  </div>
</template>
