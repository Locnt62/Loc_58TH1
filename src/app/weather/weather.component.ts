import { Component, OnInit } from '@angular/core';
import { WeatherSevice } from './weather.service';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherSevice]
})
export class WeatherComponent implements OnInit {
  public weather: any;
  public temp: any;
  public pressure: any;
  public humidity: any;
  public windSpeed: any;
  public country: any;
  public description: any;
  public tempMax:any;
  public tempMin:any;
  txtCityName = '';
  cityName = ''

  constructor(private weatherService: WeatherSevice) { }

  ngOnInit() {

  }
  getWeather() {
    this.weatherService.getAll(this.txtCityName).subscribe(data => {
      this.temp = data.main.temp;
      this.pressure = data.main.pressure;
      this.humidity = data.main.humidity;
      this.windSpeed = data.wind.speed;
      this.country = data.sys.country;
      this.description = data.weather[0].description;
      this.tempMax = data.main.temp_max;
      this.tempMin = data.main.temp_min;
      this.cityName = this.txtCityName;
      console.log()

    }, error => {
      alert("Bạn điền tên thành phố chưa chính xác")
    });
  }ơ

}
