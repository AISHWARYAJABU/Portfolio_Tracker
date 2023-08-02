import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketdataService {
  baseurl="https://financialmodelingprep.com/api/v3/"
  key="f551ef806631c0f25b1e797f8c82aacd"
  constructor(private http:HttpClient) { }

  getMajorIndices(){
    return this.http.get(this.baseurl+"sector-performance?apikey="+this.key)
  }

  getMostGainers(){
    return this.http.get(this.baseurl+"stock_market/gainers?apikey="+this.key)
  }

  getMostLosers(){
    return this.http.get(this.baseurl+"stock_market/losers?apikey="+this.key)
  }
}
