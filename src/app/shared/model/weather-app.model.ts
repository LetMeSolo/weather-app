export interface IToday { // погода на сегодня
  base: string,
  clouds: {
    all: number
  },
  cod: number,
  coord: {
    lat: number,
    lon: number
  },
  dt: number,
  id: number,
  main: {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_max: number,
    temp_min: number,
  },
  name: string,
  sys: {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number
  },
  timezone: number,
  visibility: number,
  weather: [{
    description: string,
    icon: string,
    id: number,
    main: string
  }],
  wind: {
    deg: number,
    gust: number,
    speed: number
  }
}

export interface IForecast { //погода на 5 дней
  city: {
    coord: {
      lat: number,
      lon: number
    },
    country: string,
    id: number,
    name: string,
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number
  },
  cnt: number,
  cod: string,
  list: IList[],
  message: string
}

export interface IList {
  clouds: {
    all: number
  },
  dt: number,
  dt_txt: string,
  main: {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_kf: number,
    temp_max: number,
    temp_min: number
  },
  pop: number,
  sys:  {
    pod: string
  },
  visibility: number,
  weather: [{
    description: string,
    icon: string,
    id: number,
    main: string
  }],
  wind: {
    deg: number,
    gust: number,
    speed: number
  }
}
