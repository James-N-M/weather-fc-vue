<template>
  <div class="columns" v-if="!loading">
    <SidePanel :forecast="forecast" />
    <div class="column">
      <div class="container">
        <div class="is-flex is-justify-content-right">
          <app-button class="mr-4" :action="'C°'"></app-button>
          <app-button :action="'F°'"></app-button>
        </div>
        <ForecastTiles />
        <MiscTiles :forecast="forecast" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import WeatherForecastService from "./services/WeatherForecastService";
import SidePanel from "./components/SidePanel.vue";
import AppButton from "./components/AppButton.vue";
import type { Forecast } from "./types/forecast";
import ForecastTiles from "./components/ForecastTiles.vue";
import MiscTiles from "./components/MiscTiles.vue";
export default defineComponent({
  data() {
    return {
      forecast: {} as Forecast,
      loading: true,
    };
  },
  methods: {
    weatherImage() {
      return {
        Mist: "Cloud-background.png",
        Clear: "Clear.png",
        Clouds: "LightCloud.png",
        Rain: "LightRain",
      };
    },
  },
  async created() {
    WeatherForecastService.getWeatherForecast().then((response: Forecast) => {
      this.loading = false;
      this.forecast = response;
    });
  },
  components: { SidePanel, AppButton, ForecastTiles, MiscTiles },
});
</script>
