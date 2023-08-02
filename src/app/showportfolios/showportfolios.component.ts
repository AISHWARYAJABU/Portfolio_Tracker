import { Component, OnInit } from '@angular/core';
import { portfolio } from '../Models/portfolio';
import { HttpClient } from '@angular/common/http';
import { PortfolioService } from '../service/portfolio.service';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormControl, FormGroup ,FormsModule,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showportfolios',
  templateUrl: './showportfolios.component.html',
  styleUrls: ['./showportfolios.component.css']
})
export class ShowportfoliosComponent implements OnInit{
    myForm!:FormGroup
    portfolios:Array<portfolio>=[]
    totalInvestedValues: Map<number, number> = new Map<number, number>();
    constructor(
      private portfolioservice:PortfolioService,
      private auth:AuthService,
      private fb:FormBuilder,
      private router:Router)
      {

    }
    ngOnInit(): void
    {
      this.getPortfolios()
      this.getPortfoliosTotalInvestedValues();
      this.myForm = this.fb.group({
        userName: new FormControl(''), // Add required validation
  portfolioName: ['', Validators.required]
      });
     }



    addPortfolio(obj:portfolio){
      obj.userName=this.auth.username
      // this.obj.portfolioName=this.portfolioname
      this.portfolioservice.addPortfolio(obj).subscribe(res=>{
        console.log(res);
        this.router.navigate(['yourportfolios'])
        this.getPortfolios()
      })
    }


    getPortfoliosTotalInvestedValues(): void {
      this.portfolios.forEach((portfolio) => {
        const totalInvestedValue = this.portfolioservice.getTotalInvestedValue(portfolio.portfolioId!);
        console.log(`Total invested value for ${portfolio}: ${totalInvestedValue}`);
        // You can store or use the totalInvestedValue as needed
        this.totalInvestedValues.set(portfolio.portfolioId!, totalInvestedValue);
      });
    } 

    // getTotalInvestedValue(portfolioId: number): number  {
    //   console.log(this.totalInvestedValues.get(portfolioId));
      
    //   return this.totalInvestedValues.get(portfolioId);
    // }
  

    getPortfolios(){
      console.log(this.auth.username);
      
      this.portfolioservice.getPortfolio(this.auth.username).subscribe(res=>{
        this.portfolios=res
      })
    }

    deletePortfolio(id:number){
      this.portfolioservice.deletePortfolio(id).subscribe(res=>{
        console.log("deleted");
        this.getPortfolios()
      });
    }
}
