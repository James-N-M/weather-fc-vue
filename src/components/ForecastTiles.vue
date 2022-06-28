<template>
  <div class="tile is-ancestor has-text-centered">
    <div
      v-for="(day, index) in fiveDayForecast"
      :key="index"
      class="tile is-parent"
    >
      <article class="tile is-child box has-background-dark">
        <p class="title has-text-white">{{ day.dt }}</p>
        <figure class="image is-4by3">
          <img
            :src="'/src/assets/weather-images/' + day.weather[0]?.main + '.png'"
          />
        </figure>
        <p class="subtitle has-text-white">
          {{ Math.floor(day.temp.max) }}°F {{ Math.floor(day.temp.min) }}°F
        </p>
      </article>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    fiveDayForecast: {
      type: Array as PropType<Array<any>>,
      default: null,
    },
  },
});
</script>
