<template>
  <aside
    class="column is-one-quarter aside hero is-fullheight has-background-dark"
  >
    <div class="is-flex is-justify-content-space-around">
      <button class="button">Search</button>
      <button class="button">Location</button>
    </div>
    <div>
      <figure class="image">
        <img src="https://bulma.io/images/placeholders/256x256.png" />
      </figure>
    </div>
    <div class="has-text-centered has-text-white">
      <div>{{ forecast?.main?.temp }}°</div>
      <div>{{ forecast?.weather[0].main }}</div>
      <div>Today - Fri, 14, May</div>
      <div>{{ forecast?.name }}</div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["forecast"],
  data() {
    return {};
  },
});
</script>
