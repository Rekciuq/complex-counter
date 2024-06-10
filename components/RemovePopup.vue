<script setup lang="ts">
const { t } = useI18n();
interface Props {
  showAnimation: boolean;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="popup" :class="{ 'popup-play': props.showAnimation }">
    <p>{{ t("main-page.remove-counter") }}</p>
  </div>
</template>
