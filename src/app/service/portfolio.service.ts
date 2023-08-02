import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { portfolio } from '../Models/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService implements OnInit{

  baseURL="https://localhost:7012/"
  totalInvestedValues: Map<number, number> = new Map<number, number>() 
   constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  setTotalInvestedValue(portfolioId: number, value: number): void {
    this.totalInvestedValues.set(portfolioId, value);
  }

  getTotalInvestedValue(portfolioId: number): number  {
    return this.totalInvestedValues.get(portfolioId)!;
  }
  

  addPortfolio(obj:portfolio):Observable<portfolio>{
    return this.http.post<portfolio>(this.baseURL+"api/PortfolioProfile",obj)
  }

  getPortfolio(un:string):Observable<Array<portfolio>>{
    return this.http.get<Array<portfolio>>(this.baseURL+`api/PortfolioProfile/Portfolios?username=${un}`)
  }

  deletePortfolio(id:number){
    return this.http.delete(this.baseURL+`api/PortfolioProfile/Portfolios/${id}`);
  }
}
