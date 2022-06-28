<script setup lang="ts">
// import type { Forecast } from "@/types/forecast";

defineProps<{
  forecast: any;
}>();
</script>

<template>
  <div>
    <h2 class="title has-text-black">Todays highlights</h2>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Wind Speed</p>
              <p class="subtitle">{{ forecast.wind_speed }}mph</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">UVI</p>
              <p class="subtitle">{{ forecast.uvi }}</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Humidity</p>
              <p class="has-text-centered">{{ forecast.humidity }}%</p>
              <progress
                class="progress is-warning is-large"
                :value="forecast.humidity"
                max="100"
              >
                {{ forecast.humidity }}%
              </progress>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
