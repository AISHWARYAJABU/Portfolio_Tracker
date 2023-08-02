
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { StockService } from '../service/stock.service';
import { portfolio } from '../Models/portfolio';
import { PortfolioService } from '../service/portfolio.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-createportfolio',
  templateUrl: './createportfolio.component.html',
  styleUrls: ['./createportfolio.component.css']
})
export class CreateportfolioComponent implements OnInit {
  // username:string=""
  // portfolioname:string=""
  // obj!:portfolio
  myForm!:FormGroup
  constructor(private portfolioservice:PortfolioService,private router:Router,private auth:AuthService){

  }
  ngOnInit(): void {
    this.myForm = new FormGroup({
      userName: new FormControl(''),
      portfolioName: new FormControl('')
    });
  }

  addPortfolio(obj:portfolio){
    obj.userName=this.auth.username
    // this.obj.portfolioName=this.portfolioname
    this.portfolioservice.addPortfolio(obj).subscribe(res=>{
      console.log(res);
      this.router.navigate(['yourportfolios'])
    })
  }
  
}
