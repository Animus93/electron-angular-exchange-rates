import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Iitem } from '../interfaces/currency.interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  ratesSubject$ = new Subject<[string, any][]>();
  flagSubject$ = new Subject<string>();
  countrySubject$ = new Subject<string>()
  isLoading = false;

  switchLoader() {
    this.isLoading = !this.isLoading
  }
}
