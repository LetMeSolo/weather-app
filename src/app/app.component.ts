import { Component } from '@angular/core';
import { IForecast, IToday } from "./shared/model/weather-app.model";
import { WeatherService } from "./shared/service/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  weatherToday!: IToday;
  forecastWeather!: IForecast;

  inputValue: string = '';
  cityName: string = '';
  lang: string = 'ru';

  isWeatherTodayVisible: boolean = false;
  isForecastWeatherVisible: boolean = false;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit():void {
  }

  getWeatherToday(): void {
    if(this.inputValue === '') {
      return alert('Enter city name!');
    }else {
      this.cityName = this.inputValue;
      this.isWeatherTodayVisible = true;
      this.isForecastWeatherVisible = false;
    }

    this.weatherService.getTodayWeatherByCityName(this.cityName, this.lang).subscribe((weatherToday: IToday) => {
      this.weatherToday = weatherToday;
      console.log(this.weatherToday);
    })
  }

  getForecastWeather(): void {
    if(this.inputValue === '') {
      return alert('Enter city name!');
    }else {
      this.cityName = this.inputValue;
      this.isWeatherTodayVisible = false;
      this.isForecastWeatherVisible = true;
    }

    this.weatherService.getForecastWeatherByCityName(this.cityName, this.lang).subscribe((forecastWeather: IForecast) => {
      this.forecastWeather = forecastWeather;
      console.log(this.forecastWeather);
    })
  }





}
