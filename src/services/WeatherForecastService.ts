import type { Forecast } from "@/types/forecast";
import type { ForecastList } from "@/types/forecast-list";

export default {
  async currentWeather(lat: number, lon: number): Promise<Forecast> {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}2&lon=${lon}&appid=11492dd634e105f464367660ac90ceee&units=imperial`
    );

    return response.json();
  },

  async fiveDayWeatherForecast(
    lat: number,
    lon: number
  ): Promise<ForecastList> {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}2&lon=${lon}&appid=11492dd634e105f464367660ac90ceee&units=imperial`
    );

    return response.json();
  },
};
