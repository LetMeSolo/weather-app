import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IForecast, IToday} from "../model/weather-app.model";

const API_KEY = '5702586bc27cdac078f882cccbe2e458';
const API_URL_TODAY = 'https://api.openweathermap.org/data/2.5/weather/';
const API_URL_FORECAST = 'https://api.openweathermap.org/data/2.5/forecast';
const API_URL_HOURLY = "https://api.openweathermap.org/data/2.5/forecast/hourly";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  @Input() lang!: string;
  @Input() cityName!: string;

  constructor(private http: HttpClient) { }

  getTodayWeatherByCityName(cityName: string, lang: string): Observable<IToday> {
    return this.http.get<IToday>(`${API_URL_TODAY}/?q=${cityName}&limit=1&appid=${API_KEY}&units=metric&lang=${lang}`);
  }

  getForecastWeatherByCityName(cityName: string, lang: string): Observable<IForecast> {
    return this.http.get<IForecast>(`${API_URL_FORECAST}?q=${cityName}&lang=${lang}&appid=${API_KEY}&units=metric`); //вернуть ${cityName}
  }
}
