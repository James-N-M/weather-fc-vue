<template>
  <aside
    class="column is-one-quarter aside hero is-fullheight has-background-dark"
  >
    <div class="is-flex is-justify-content-space-around mt-4">
      <app-button :action="'Search'"> </app-button>
      <app-button :action="'Location'"> </app-button>
    </div>
    <div class="is-flex is-justify-content-center">
      <img
        :src="
          '/src/assets/weather-images/' + forecast.weather[0]?.main + '.png'
        "
      />
    </div>
    <div class="has-text-centered">
      <span class="has-text-white is-size-3">{{
        forecast.weather[0]?.description
      }}</span>
    </div>
    <div class="has-text-centered has-text-white">
      <div>{{ forecast.temp.day }}°</div>
      <div>{{ forecast.dt }}</div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import AppButton from "./AppButton.vue";

export default defineComponent({
  props: {
    forecast: Object as PropType<any>,
  },
  data() {
    return {};
  },
  components: { AppButton },
});
</script>
