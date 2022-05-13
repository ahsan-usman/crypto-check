import { CurrencyService } from './service/currency.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency: string = "PKR";
  constructor(private currecnyService: CurrencyService) { }
  sendCurrency(event: string) {
    console.log(event)
    this.currecnyService.setCurrency(event)
  }
}
