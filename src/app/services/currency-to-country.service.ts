import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Icurr } from '../interfaces/currency.interface';
import { ExchangeRatesService } from './exchange-rates.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyToCountryService {

  constructor(private http: HttpClient) { }
  apiKey = 'LRG0ALsfkjDJg8dEXp898P5XtyV766kd'

  getCountries(country: string) {
    // @ts-ignore
    return this.http.get('assets/temp/countries.json').pipe(map(data => (Object.entries(data).find(([key, value]) => {
      return value === country
    })[0])))
  }
  getAllCurrencyName() {
    return this.http.get('assets/temp/symbols.json')
    // return this.http.get(`https://api.apilayer.com/fixer/symbols?apikey=${this.apiKey}`)
  }
}
