<script setup lang="ts">
defineProps<{
  action: string;
}>();
</script>

<template>
  <button class="button is-primary">{{ action }}</button>
</template>
