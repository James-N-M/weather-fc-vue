<template>
  <div class="columns" v-if="!loading">
    <SidePanel :forecast="today" />
    <div class="column">
      <div class="container">
        <section class="hero is-success mb-4">
          <div class="hero-body is-flex is-justify-content-flex-end">
            <app-button class="mr-4" :action="'C°'"></app-button>
            <app-button :action="'F°'"></app-button>
          </div>
        </section>
        <ForecastTiles :fiveDayForecast="fiveDayForecast" />
        <MiscTiles :forecast="today" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import WeatherForecastService from "./services/WeatherForecastService";
import SidePanel from "./components/SidePanel.vue";
import AppButton from "./components/AppButton.vue";
import ForecastTiles from "./components/ForecastTiles.vue";
import MiscTiles from "./components/MiscTiles.vue";
export default defineComponent({
  data() {
    return {
      dailyForecasts: [],
      loading: true,
    };
  },
  methods: {},
  async created() {
    WeatherForecastService.forecast(42.33143, -83.04575).then((response) => {
      this.loading = false;
      this.dailyForecasts = response.daily.map(function (day: any) {
        day.dt = new Date(parseInt(day.dt) * 1000).toLocaleDateString("en", {
          weekday: "long",
        });

        return day;
      });
    });
  },
  computed: {
    fiveDayForecast() {
      return this.dailyForecasts.slice(1, 6);
    },
    today() {
      return this.dailyForecasts[0];
    },
  },
  components: { SidePanel, AppButton, ForecastTiles, MiscTiles },
});
</script>
