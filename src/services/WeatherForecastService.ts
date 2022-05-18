import type { Forecast } from "@/types/forecast";

export default {
  async getWeatherForecast(): Promise<Forecast> {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=42.317432&lon=-83.026772&appid=11492dd634e105f464367660ac90ceee&units=imperial`
    );

    return response.json();
  },
};
