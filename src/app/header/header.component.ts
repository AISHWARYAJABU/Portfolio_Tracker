import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthService } from '../service/auth.service';

// const API_URL = 'https://finnhub.io/api/v1/quote';
// const API_TOKEN = 'cj3of81r01qsj5njo4agcj3of81r01qsj5njo4b0';

// interface StockQuote {
//   symbol: string;
//   currentPrice: number;
// }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  panelOpenState = true;
 
 
  title(title: any) {
    throw new Error('Method not implemented.');
  // }
  // stockQuotes: StockQuote[] = [];
  // symbols: string[] = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'NVDA', 'PCGU', 'META', 'TSM', 'UNH', 'LLY',
  //                       // 'V', 'JNJ', 'XOM', 'WMT', 'JPM', 'MA', 'PG', 'NVO', 'AVGO', 'ORCL', 'HD', 
  //                       // 'BHP', 'CVX', 'MRK', 'ASML', 'KO', 'PEP', 'COST', 'ABBV', 'BABA', 'BAC', 'ADBE',
  //                       // 'ARVL','WCIG','NSHSF','PKST','SOHO','RMYHY','VASO','PDGRD','WXXWY','ALMY','DDOG',
  //                       // 'CJAX','ARKF', 'SDXOF','SZHFF','BMMCF','DMDV','MAR','EXDW','FNGS','VIOG','RIII','CPIVF',
  //                       // 'MBINP','TSCDY','LOMEF','DEUZF','SHKLY','BJCHY','SAPMY','FGRO','ISSC','KZIA','PWM','COBJF',
  //                       // 'RCLFF','EJPRF','TXMD','AON','MAKSF','MFEM','DVRNF','BWAC','TLGY'
  //                     ]; // Add your desired stock symbols here

  // constructor(private http: HttpClient,private auth:AuthService) {}

  // ngOnInit() {
  //   this.fetchStockQuotes();
  // }

  // fetchStockQuotes() {
  //   this.symbols.forEach((symbol) => {
  //     this.http
  //       .get(`${API_URL}?symbol=${symbol}&token=${API_TOKEN}`)
  //       .subscribe((response: any) => {
  //         const stockQuote: StockQuote = {
  //           symbol: symbol,
  //           currentPrice: response.c
  //         };
  //         this.stockQuotes.push(stockQuote);
  //       });
  //   });
  // }


  // logout(){
  //   this.auth.logout();
  // }

  
}}

