import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { newsItem } from '../Models/newsItem';
import { priceQuote } from '../Models/priceQuote';
import { UserdataService } from '../service/userdata.service';
import { stockItem } from '../Models/stockdetails';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
interface StockQuote {
  symbol: string;
  currentPrice: number;
}

const API_URL = 'https://finnhub.io/api/v1/quote';
const API_TOKEN = 'cj3nlm1r01qsj5njnsg0cj3nlm1r01qsj5njnsgg';

@Component({
  selector: 'app-allstocks',
  templateUrl: './allstocks.component.html',
  styleUrls: ['./allstocks.component.css']
})

export class AllstocksComponent {
 
  google!:priceQuote;
  apple!:priceQuote;
  msft!:priceQuote;
  tsla!:priceQuote;
  stocks!:priceQuote;
  item:stockItem[]=[];
  news: newsItem[] = [];
  symbol: string = '';
  searchStocks: never[]=[];
  chartUrl: any;
 
  

  constructor(private userService:UserdataService, 
    private router: Router,private httpClient:HttpClient,
    private sanitizer: DomSanitizer) { }
    stockQuotes: StockQuote[] = [];
    symbols: string[] = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'NVDA', 'PCGU', 'META', 'TSM', 'UNH', 'LLY',
                            'V', 'JNJ', 'XOM', 'WMT', 'JPM', 'MA', 'PG', 'NVO', 'AVGO', 'ORCL', 'HD', 
                          'BHP', 'CVX', 'MRK', 'ASML', 'KO', 'PEP', 'COST', 'ABBV', 'BABA', 'BAC', 'ADBE'];
  
  
  
    fetchStockQuotes() {
      this.symbols.forEach((symbol) => {
        this.httpClient
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

  fetchNews(): void {
    const apiUrl = 'https://finnhub.io/api/v1/news?category=general&token=cihvq39r01qik1h4deigcihvq39r01qik1h4dej0';
    this.httpClient.get(apiUrl).subscribe((data: any) => {
      const marketWatchNews = data.filter((item: newsItem) => item.source === 'MarketWatch').slice(0, 12);
      this.news = marketWatchNews;
    });
  }
fetchGraph(): void{
  const chartUrl = `https://widget.finnhub.io/widgets/stocks/chart?symbol=AAPL&watermarkColor=%231db954&backgroundColor=%23222222&textColor=white`;
  this.chartUrl = this.sanitizer.bypassSecurityTrustResourceUrl(chartUrl);
}
  ngOnInit(): void {
    this.fetchGraph();
    
    this.userService.user().subscribe((res:any )=>{
      this.item=res;
     // this.stocks.slice(0,15)
  })
  this.fetchStockQuotes();
  this.fetchNews();
  }


  navigateToApplePage() {
    this.router.navigate(['/apple']);
  }
  navigateToGooglePage() {
    this.router.navigate(['/google']); 
  }
  navigateToMsftPage(){
    this.router.navigate(['/msft'])
  }
  navifateToTslaPage(){
    this.router.navigate(['/tsla'])
  }
  selectSymbol(symbol: string) {
    this.symbol = symbol;
    this.searchStocks = [];
  }
 
}
