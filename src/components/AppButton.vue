<script setup lang="ts">
defineProps<{
  action: string;
}>();
</script>

<template>
  <button class="button">{{ action }}</button>
</template>
