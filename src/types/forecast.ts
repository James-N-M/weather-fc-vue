import type { Main } from "./main";
import type { Weather } from "./weather";
import type { Wind } from "./wind";

export interface Forecast {
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  name: string;
}
