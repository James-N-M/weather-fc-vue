export default {
  async forecast(lat: number, lon: number) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=11492dd634e105f464367660ac90ceee&units=imperial`
    );

    return response.json();
  },
};
