// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// @Component({
//   selector: 'app-details',
//   templateUrl: './details.component.html',
//   styleUrls: ['./details.component.css']
// })
// export class DetailsComponent {
//   symbol: string = '';
//   details: any = null;
//   cp: any;
//   h: any;
//   l: any;
//   op: any;
//   pc: any;

//   symbols?: string;
//   chartUrl?: SafeResourceUrl;

//   constructor(private httpClient: HttpClient , private sanitizer: DomSanitizer) {}


//   fetchDetailsAndPrices() {
//     const apiUrl = `https://finnhub.io/api/v1/stock/profile2?symbol=${this.symbol}&token=cii0ho1r01qik1h4djv0cii0ho1r01qik1h4djvg`;
//     const quoteUrl = `https://finnhub.io/api/v1/quote?symbol=${this.symbol}&token=cii0ho1r01qik1h4djv0cii0ho1r01qik1h4djvg`;
//     const chartUrl = `https://widget.finnhub.io/widgets/stocks/chart?symbol=${this.symbol}&watermarkColor=%231db954&backgroundColor=%23222222&textColor=white`;
    
//     this.httpClient.get<any>(apiUrl).subscribe((data: any) => {
//       this.details = data;
//     });

//     this.httpClient.get<any>(quoteUrl).subscribe((response: any) => {
//       this.cp = response.c;
//       this.h = response.h;
//       this.l = response.l;
//       this.op = response.o;
//       this.pc = response.pc;
//     });
    
//     this.chartUrl = this.sanitizer.bypassSecurityTrustResourceUrl(chartUrl);
//   }
// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  symbol: string = '';
  details: any = null;
  cp: any;
  h: any;
  l: any;
  op: any;
  pc: any;

  symbols?: string;
  chartUrl?: SafeResourceUrl;
  profileData: any;

  constructor(private httpClient: HttpClient , private sanitizer: DomSanitizer) {}


  fetchDetailsAndPrices() {
    const logourl = `https://finnhub.io/api/v1/stock/profile2?symbol=${this.symbol}&token=cii0ho1r01qik1h4djv0cii0ho1r01qik1h4djvg`;
    const apiUrl = `https://financialmodelingprep.com/api/v3/profile/${this.symbol}?apikey=3e364e2bd09bb4d56808a22123a06228`;
    const quoteUrl = `https://finnhub.io/api/v1/quote?symbol=${this.symbol}&token=cii0ho1r01qik1h4djv0cii0ho1r01qik1h4djvg`;
    const chartUrl = `https://widget.finnhub.io/widgets/stocks/chart?symbol=${this.symbol}&watermarkColor=%231db954&backgroundColor=%23222222&textColor=white`;
    
    this.httpClient.get<any>(logourl).subscribe((data: any) => {
      this.details = data;
    });
    
    this.httpClient.get<any[]>(apiUrl).subscribe((data) => {
      if (data && data.length > 0) {
        this.profileData = data[0];
      }
    });
    this.httpClient.get<any>(quoteUrl).subscribe((response: any) => {
      this.cp = response.c;
      this.h = response.h;
      this.l = response.l;
      this.op = response.o;
      this.pc = response.pc;
    });
    
    this.chartUrl = this.sanitizer.bypassSecurityTrustResourceUrl(chartUrl);
  }
}



