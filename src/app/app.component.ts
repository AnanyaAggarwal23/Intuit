import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CovidData } from './models/covid.model';
import { CountryData } from './models/country.model';
import { GlobalSummary } from './models/global.model';
import { HttpService } from './services/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'intuit-assignment';
  globalSummary: GlobalSummary[];
  countriesData: CountryData[];

  dataSub: Subscription;

  constructor(private httpSvc: HttpService) {
    this.fetchData(true);
  }

  fetchData(event: boolean) {
    this.dataSub = this.httpSvc
      .getCovidSummary()
      .subscribe((res: CovidData) => {
        this.globalSummary = res.Global;
        this.countriesData = res.Countries;
      });
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
