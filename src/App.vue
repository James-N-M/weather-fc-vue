<template>
  <div class="columns">
    <SidePanel :forecast="forecast" />
    <div class="column">
      <div class="container">
        <div class="is-flex is-justify-content-right">
          <button>C°</button>
          <button>F°</button>
        </div>
        <div class="tile is-ancestor has-text-centered">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Tommorow</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
              <p class="subtitle">15°C 11°C</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Sun, 15th May</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
              <p class="subtitle">18°C 12°C</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Mon, 16th May</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
              <p class="subtitle">22°C 5°C</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Tues, 17th May</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
              <p class="subtitle">15°C 11°C</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Wed, 18th May</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
              <p class="subtitle">2°C 1°C</p>
            </article>
          </div>
        </div>
        <div>
          <h2 class="title has-text-white">Todays highlights</h2>
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-primary">
                    <p class="title">Wind status</p>
                    <p class="subtitle">{{ forecast.wind?.speed }}mph</p>
                  </article>
                  <article class="tile is-child notification is-warning">
                    <p class="title">Visibility</p>
                    <p class="subtitle">{{ forecast.visibility }} miles</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-info">
                    <p class="title">Humidity</p>
                    <p class="has-text-centered">
                      {{ forecast.main?.humidity }}%
                    </p>
                    <progress
                      class="progress is-warning is-large"
                      :value="forecast.main?.humidity"
                      max="100"
                    >
                      {{ forecast.main?.humidity }}%
                    </progress>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import WeatherForecastService from "./services/WeatherForecastService";
import SidePanel from "./components/SidePanel.vue";
import type { Forecast } from "./types/forecast";
export default defineComponent({
  data() {
    return {
      forecast: {} as Forecast,
    };
  },
  methods: {},
  async created() {
    this.forecast = await WeatherForecastService.getWeatherForecast();
  },
  components: { SidePanel },
});
</script>
