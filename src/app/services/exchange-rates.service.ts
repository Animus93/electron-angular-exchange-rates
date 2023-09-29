import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iitem } from '../interfaces/currency.interface';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  // currentCurrency = 'RUB';


  constructor(private http: HttpClient) { }
  apiKey = 'LRG0ALsfkjDJg8dEXp898P5XtyV766kd'

  // updCurrentCurrency(data: string) {
  //   return this.currentCurrency = data
  // }

  getExchangeRates(curr = 'RUB'): Observable<Iitem> {
    // return this.http.get<Iitem>('assets/temp/latest.json')
    return this.http.get<Iitem>(`https://api.apilayer.com/fixer/latest?base=${curr}&apikey=${this.apiKey}`)
  }

}
