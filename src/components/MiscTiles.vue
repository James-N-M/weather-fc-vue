<script setup lang="ts">
import type { Forecast } from "@/types/forecast";

defineProps<{
  forecast: Forecast;
}>();
</script>

<template>
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
              <p class="has-text-centered">{{ forecast.main?.humidity }}%</p>
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
</template>
