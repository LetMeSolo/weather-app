import { Component, Input, OnInit } from '@angular/core';
import { IForecast } from 'src/app/shared/model/weather-app.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  constructor() { }

  @Input() forecastWeather!: IForecast;

  ngOnInit(): void {
  }

  getDayName(array: any) { /* получение дня недели */
    let date: any = new Date(array.dt_txt);
    date = String(date).split(' ');
    // console.log(date);
    return date[0];
  }

  getDateName(array: any) { /* получение месяца и числа */
    let date: any = new Date(array.dt_txt);
    date = String(date).split(' ');
    // console.log(date);
    return `${date[1]} ${date[2]}`;
  }

  getHour(array: any) {
    let hour: any = new Date(array.dt_txt);
    hour = String(hour).split(' ');
    hour = hour[4];
    hour = String(hour).split('');
    return `${hour[0]}${hour[1]}:00`;
  }

  getTepMathRound(number: number) {
    return Math.round(number);
  }

}
