import { Component, OnInit } from '@angular/core';
import { stock } from '../Models/stock';
import { HttpClient } from '@angular/common/http';
import { StockService } from '../service/stock.service';
import { ActivatedRoute } from '@angular/router';
import { FinnhubService } from '../service/finnhub.service';
import { Observable, forkJoin, map } from 'rxjs';
import { priceQuote } from '../Models/priceQuote';
import { store } from '../Models/store';

import { PortfolioService } from '../service/portfolio.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewstocks',
  templateUrl: './viewstocks.component.html',
  styleUrls: ['./viewstocks.component.css'],
})
export class ViewstocksComponent implements OnInit {
  tc: any;
  result!: any;
  stocks!: Observable<stock[]>;
  id: any;
  myForm!:FormGroup
  //currentprices=new Map<string,number>()
  Store:store
  currprices!: priceQuote;
  currentprice!: number;
  totalInvestedValue!: number;

  constructor(
    private stockservice: StockService,
    private route: ActivatedRoute,
    private fin: FinnhubService,
    private portfolioService:PortfolioService,
    private fb:FormBuilder
  ) { 
    this.Store=new store();
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getStocksbyusername(this.id);
   
    this.myForm = this.fb.group({
      stockSymbol: ['', Validators.required],
      stockName: ['', Validators.required],
    stockPrice: ['', [Validators.required, Validators.pattern(/^-?\d+\.?\d*$/)]],
    stockQuantity: ['', [Validators.required, Validators.pattern(/^-?\d+$/)]]
    });
  }

  getStocksbyusername(id: number) {
    // this.stockservice.getStocksbyusername(id).subscribe(res=>{
    //   // console.log(res);
    //   this.stocks=res
    //   // console.log(this.stocks.length);
    // })
    // console.log(res);
    this.stocks = this.stockservice.getStocksbyusername(id);
    this.stocks.subscribe((stocks) => {
      stocks.forEach((stock) => {
        // this.Store.getValue(stock.stockSymbol);
        this.totalInvestedValue += stock.stockPrice * stock.stockQuantity;
      });
      this.portfolioService.setTotalInvestedValue(id, this.totalInvestedValue);
    });
    // console.log(this.stocks.length);
  }

  // getStockPrices() {
  //   this.stocks.subscribe(stocks => {
  //     stocks.forEach(stock => {
  //       this.fin.getQuote(stock.stockSymbol).subscribe(response => {
  //         this.cpList.push(response.c);
  //       });
  //     });
  //   });
  // }

  getStockprice(sym: string) {
    var response = this.fin.getQuote(sym).subscribe((response) => {
      this.currprices = response;
      return;
    });
  }
  // getStockprice(sym:string){
  //   this.fin.getQuote(sym).subscribe(response => {
  //     console.log('stock ', response)
  //     // this.cp = response
  //   });
  //   // while(this.num<=0)
  //   //   {
  //   //     var result = response;
  //   //     this.num++;
  //   //   }
  //   // this.currprices=this.fin.getQuote(sym)
  //   // console.log(this.currprices);
  // }

  deleteStock(id: number) {
    this.stockservice.deleteStockById(id).subscribe((res) => {
      console.log('stock deleted');
      this.getStocksbyusername(id);
    });
  }

  getStockPrice(sym: string){
    
    // this.currentprice=round(this.Store.getValue(sym),2);
    // return this.currentprice

    this.stockservice.getCurrentPrice(sym).subscribe(res=>{
      console.log(res);
      ;
    })
  }


  addStock(obj:stock){
    // this.obj.userName=this.username
    // this.obj.portfolioName=this.portfolioname
    obj.portfolioId=this.id
    console.log(obj);
    
    this.stockservice.addStock(obj).subscribe(res=>{
      console.log(res);
      this.myForm.reset();
      
    })
    this.stocks=this.stockservice.getStocksbyusername(this.id)
  
  }
}
