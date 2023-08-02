import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gainer-loser',
  templateUrl: './gainer-loser.component.html',
  styleUrls: ['./gainer-loser.component.css']
})
export class GainerLoserComponent implements OnInit {
  gainers: any[] = [];
  losers: any[] = [];
  selectedSymbolDetails: any = null; 

  unwantedSymbols: string[] = ['ZXZZT', 'ZVZZT','BBIG'];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.fetchMostGainers();
    this.fetchMostLosers();
  }

  fetchMostGainers() {
    const apiUrl = 'https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=2345b9415d92f4a5a1b16697fdaf67d5';
    this.httpClient.get<any[]>(apiUrl).subscribe((data: any[]) => {
      this.gainers = data.filter(item => !this.unwantedSymbols.includes(item.symbol)).slice(0, 15);
    });
  }

  fetchMostLosers() {
    const apiUrl = 'https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=2345b9415d92f4a5a1b16697fdaf67d5';
    this.httpClient.get<any[]>(apiUrl).subscribe((data: any[]) => {
      this.losers = data.filter(item => !this.unwantedSymbols.includes(item.symbol)).slice(0, 15);
    });
  }
}
