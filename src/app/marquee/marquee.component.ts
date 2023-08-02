import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';



const API_URL = 'https://finnhub.io/api/v1/quote';
const API_TOKEN = 'cj3op61r01qsj5njo7vgcj3op61r01qsj5njo800';

interface StockQuote {
  symbol: string;
  currentPrice: number;
}

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent { stockQuotes: StockQuote[] = [];
  symbols: string[] = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'NVDA', 'PCGU', 'META', 'TSM', 'UNH', 'LLY',
                        // 'V', 'JNJ', 'XOM', 'WMT', 'JPM', 'MA', 'PG', 'NVO', 'AVGO', 'ORCL', 'HD', 
                        // 'BHP', 'CVX', 'MRK', 'ASML', 'KO', 'PEP', 'COST', 'ABBV', 'BABA', 'BAC', 'ADBE',
                        // 'ARVL','WCIG','NSHSF','PKST','SOHO','RMYHY','VASO','PDGRD','WXXWY','ALMY','DDOG',
                        // 'CJAX','ARKF', 'SDXOF','SZHFF','BMMCF','DMDV','MAR','EXDW','FNGS','VIOG','RIII','CPIVF',
                        // 'MBINP','TSCDY','LOMEF','DEUZF','SHKLY','BJCHY','SAPMY','FGRO','ISSC','KZIA','PWM','COBJF',
                        // 'RCLFF','EJPRF','TXMD','AON','MAKSF','MFEM','DVRNF','BWAC','TLGY'
                      ]; // Add your desired stock symbols here

  constructor(private http: HttpClient,private auth:AuthService) {}

  ngOnInit() {
    this.fetchStockQuotes();
  }

  fetchStockQuotes() {
    this.symbols.forEach((symbol) => {
      this.http
        .get(`${API_URL}?symbol=${symbol}&token=${API_TOKEN}`)
        .subscribe((response: any) => {
          const stockQuote: StockQuote = {
            symbol: symbol,
            currentPrice: response.c
          };
          this.stockQuotes.push(stockQuote);
        });
    });
  }


  logout(){
    this.auth.logout();
  }

  
}

