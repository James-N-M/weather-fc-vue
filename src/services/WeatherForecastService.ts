import type WeatherForecast from "@/types";

export default {
  async getWeatherForecast(): Promise<WeatherForecast> {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=42.317432&lon=-83.026772&appid=11492dd634e105f464367660ac90ceee&units=imperial`
    );

    return response.json();
  },
};
