<template>
  <aside
    class="column is-one-quarter aside hero is-fullheight has-background-dark"
  >
    <div class="is-flex is-justify-content-space-around">
      <app-button :action="'Search'"> </app-button>
      <app-button :action="'Location'"> </app-button>
    </div>
    <div>
      <figure class="image">
        <img src="https://bulma.io/images/placeholders/256x256.png" />
      </figure>
    </div>
    <div class="has-text-centered has-text-white">
      <div>{{ forecast?.weather[0].main }}</div>
      <div>Today - Fri, 14, May</div>
      <!-- <div>{{ forecast }}</div> -->
      <div>{{ forecast?.name }}</div>
    </div>
  </aside>
</template>

<script lang="ts">
import type { Forecast } from "@/types/forecast";
import { defineComponent, type PropType } from "vue";
import AppButton from "./AppButton.vue";

export default defineComponent({
  props: {
    forecast: Object as PropType<Forecast>,
  },
  data() {
    return {};
  },
  components: { AppButton },
});
</script>
