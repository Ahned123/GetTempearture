import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTemService {

  constructor(private http: HttpClient) { }
  ApiKey = "e484560f07feddb135f91495427fb3a9" ;
  url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  getTemp(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.ApiKey}`)
  }
}
