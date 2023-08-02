import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, delay, interval, map, mergeMap, retryWhen, switchMap, throwError, timer } from "rxjs";
import { priceQuote } from "../Models/priceQuote";



@Injectable()
export class FinnhubService {
  constructor(private http: HttpClient) {}

  configUrl = "https://finnhub.io/api/v1/";
  token = "&token=cihe2g1r01qut3a6fh5gcihe2g1r01qut3a6fh60";

  //Search Asset
  searchAssets(search: string) {
    return this.http.get(this.configUrl + "search?q=" + search + this.token);
  }

  // getQuotes(symbol: string) {
  //   return this.http.get(this.configUrl + "quote?symbol=" + symbol + this.token)
  // }
  
  // Company quote
  // console.log("Service called finnhub");
  
  getQuote(symbol: string){
    
    return this.http.get<priceQuote>(
          this.configUrl + "quote?symbol=" + symbol + this.token
        ); 
    }

      // return interval(1000).pipe(this.http.get(this.configUrl + "quote?symbol=" + symbol + this.token))

      // getStockprice(sym: string): Observable<number> {
      //   return this.http.get<priceQuote>(this.configUrl)
      // }

  // Company profile
  getCompanyProfile(symbol: string) {
    return this.http.get(
      this.configUrl + "stock/profile2?symbol=" + symbol + this.token
    );
  }
  // Company target price
  getTargetPrice(symbol: string) {
    return this.http.get(
      this.configUrl + "stock/price-target?symbol=" + symbol + this.token
    );
  }

  // Company trend  ATTENTION
  getTrend(symbol: string) {
    return this.http.get(
      this.configUrl +
        "scan/technical-indicator?symbol=" +
        symbol +
        "&resolution=D" +
        this.token
    );
  }

  // Company histo sentiment
  getHistoSentiment(symbol: string) {
    return this.http.get(
      this.configUrl + "stock/recommendation?symbol=" + symbol + this.token
    );
  }

  // Company buzz
  getBuzz(symbol: string) {
    return this.http.get(
      this.configUrl + "news-sentiment?symbol=" + symbol + this.token
    );
  }

  

  // Earnings
  getEarnings(symbol: string) {
    return this.http.get(
      this.configUrl + "stock/earnings?symbol=" + symbol + this.token
    );
  }
}

