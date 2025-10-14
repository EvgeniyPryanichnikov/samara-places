export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  }
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>
  wind: {
    speed: number;
    deg: number;
  }
  sys: {
    country: string;
  }
}
