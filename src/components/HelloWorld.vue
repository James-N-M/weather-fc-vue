<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>
    <article class="message is-primary">
      <div class="message-header">
        <p>{{ msg }}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">You've successfully created a project</div>
    </article>
  </div>
</template>
