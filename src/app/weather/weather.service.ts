import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



@Injectable()
export class WeatherSevice {


    constructor(private http: HttpClient) { }

    getAll(cityName: string) {
        const API: any = 'https://api.openweathermap.org/data/2.5/weather?appid=b18d92e2b908f4b447d3c48791c19a24&units=metric&q=' + cityName
        return this.http.get<any>(API)
        console.log(API)
    }
}