import {Component, Input, OnInit} from '@angular/core';
import {IToday} from "../../shared/model/weather-app.model";

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent implements OnInit {

  constructor() { }

  @Input() weatherToday!: IToday;

  // time = this.weatherToday.sys.

  getTemp(): number {
    return  Math.round(this.weatherToday.main.temp)
  }

  getTempFl(): number {
    return  Math.round(this.weatherToday.main.feels_like)
  }

  getSunSet(): string {
    let sunset = this.weatherToday.sys.sunset;
    let datess = new Date((sunset + + this.weatherToday.timezone) * 1000);
    return  `${datess.getUTCHours()}:${datess.getMinutes()}`
  }

  getCurrentDate(): string {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  }

  getSunRise(): string {
    let sunrise = this.weatherToday.sys.sunrise;
    let datess = new Date((sunrise + + this.weatherToday.timezone) * 1000);
    return  `${datess.getUTCHours()}:${datess.getMinutes()}`
  }

  ngOnInit(): void {
  }

}
