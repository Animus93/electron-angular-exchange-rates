import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyToCountryService } from 'src/app/services/currency-to-country.service';
import { ExchangeRatesService } from 'src/app/services/exchange-rates.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnDestroy {
  constructor(private countries: CurrencyToCountryService, private exchangeService: ExchangeRatesService, private state: StateService) { }
  visibility: boolean = false;
  Subscriptions$ = new Subscription()

  symbols = '';

  ngOnInit() {

    // @ts-ignore
    const data$ = this.countries.getAllCurrencyName().subscribe(data => { this.symbols = Object.entries(data.symbols) })
    this.Subscriptions$.add(data$)
  }
  switchVisibility() {
    this.visibility = !this.visibility
  }
  swithTo(item: any) {
    this.state.switchLoader()
    this.state.countrySubject$.next(item[1])
    this.exchangeService.getExchangeRates(item[0]).subscribe(data => {
      this.state.ratesSubject$.next(Object.entries(data.rates));
      console.log('t',Object.entries(data.rates))
      this.countriesList(data.base)
      this.state.switchLoader()
    })
    this.switchVisibility()
  }

  countriesList(country: string) {
    const data$ = this.countries.getCountries(country).subscribe(data => this.state.flagSubject$.next(data.toLocaleLowerCase()));
    this.Subscriptions$.add(data$)
    return data$
  }

  ngOnDestroy(): void {
    this.Subscriptions$.unsubscribe()
  }
}
