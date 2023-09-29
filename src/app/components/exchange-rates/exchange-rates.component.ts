import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Iitem } from 'src/app/interfaces/currency.interface';
import { CurrencyToCountryService } from 'src/app/services/currency-to-country.service';
import { ExchangeRatesService } from 'src/app/services/exchange-rates.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit, OnDestroy {
  constructor(public exchangesService: ExchangeRatesService, private countries: CurrencyToCountryService, public state: StateService) { }
  Subscriptions$ = new Subscription()
  // Exchanges = this.exchangesService.getExchangeRates()
  // Exchanges$: Observable<Iitem> = this.exchangesService.dataSubject$

  ngOnInit() {

    // this.countriesList()
    // this.getBaseData()
    // this.Subscriptions$.add(this.Exchanges$)
    // this.listOfCurr()
    // this.Subscriptions$.add(this.Exchanges$)

  }

  getBaseData() {
    this.state.switchLoader()
    const baseData = this.exchangesService.getExchangeRates().subscribe(data => {
      // this.state.ratesSubject$.next(data);
      this.state.switchLoader()
    })
    this.Subscriptions$.add(baseData)
  }



  // listOfCurr() {
  //   // @ts-ignore
  //   const data$ = this.countries.getAllCurrencyName().subscribe(data => console.log(data.symbols))
  //   this.Subscriptions$.add(data$)
  // }

  ngOnDestroy(): void {
    this.Subscriptions$.unsubscribe()
  }
}
