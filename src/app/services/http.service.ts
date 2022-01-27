import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidData } from '../models/covid.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.covid19api.com/';
  }

  getCovidSummary() {
    return this.http.get<CovidData>(this.baseUrl + 'summary');
  }
}
