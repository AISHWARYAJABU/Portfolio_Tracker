import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, interval, switchMap } from 'rxjs';
import { stock } from '../Models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  cp:any
  h:any
  l:any
  op:any
  pc:any

  baseUrl="https://localhost:7200/"
  
  constructor(private http:HttpClient) { }

  getStocksbyusername(id:number):Observable<Array<stock>>{
    return this.http.get<Array<stock>>(this.baseUrl+`api/Stock/${id}`)
  }

  getCurrentPrice(sym:string){
    // return interval(30000) // Interval of 30 seconds
    //   .pipe(
    //     switchMap(() => this.http.get(`https://finnhub.io/api/v1/quote?symbol=${sym}&token=ciekou9r01qmfas4ek7gciekou9r01qmfas4ek80`))
    //   );

    return this.http.get(`https://financialmodelingprep.com/api/v3/quote/${sym}?apikey=0d58187aa48be3fce79a6d34e5ded081`)
  }
  

 
  deleteStockById(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+`api/Stock/${id}`)
  }


  addStock(obj:stock):Observable<stock>{
    return this.http.post<stock>(this.baseUrl+"api/Stock",obj)
  }
}
