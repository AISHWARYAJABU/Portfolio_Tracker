import { Component,OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MarketdataService } from '../service/marketdata.service';
import {MatTableModule} from '@angular/material/table';



export interface PeriodicElement {
  symbol: string;
  name: string;
  change: number;
  price: number;
  changesPercentage: number;
}

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  // standalone: true,
  // imports: [MatTableModule],
})







export class MarketComponent implements OnInit{
  indices:any=[ {
    "sector" : "Basic Materials",
    "changesPercentage" : "0.0849%"
  }, {
    "sector" : "Building",
    "changesPercentage" : "2.4699%"
  }, {
    "sector" : "Communication Services",
    "changesPercentage" : "-0.7655%"
  }, {
    "sector" : "Conglomerates",
    "changesPercentage" : "0.0000%"
  }
]

  gainers:any=[ {
    "symbol" : "SGLY",
    "name" : "Singularity Future Technology Ltd.",
    "change" : 1.03,
    "price" : 5.01,
    "changesPercentage" : 25.8794
  }, {
    "symbol" : "MDVL",
    "name" : "MedAvail Holdings, Inc",
    "change" : 0.31,
    "price" : 1.58,
    "changesPercentage" : 24.409454
  }, {
    "symbol" : "BBIG",
    "name" : "Vinco Ventures, Inc.",
    "change" : 0.65,
    "price" : 3.53,
    "changesPercentage" : 22.569439
  }, {
    "symbol" : "AMPGW",
    "name" : "AmpliTech Group, Inc.",
    "change" : 0.2799,
    "price" : 1.5999,
    "changesPercentage" : 21.204542
  }, {
    "symbol" : "DAVE",
    "name" : "Dave Inc.",
    "change" : 0.99,
    "price" : 6.19,
    "changesPercentage" : 19.038467
  }
]
  losers:any=[ {
    "symbol" : "HILS",
    "name" : "Hillstream BioPharma, Inc. Common Stock",
    "change" : -0.73,
    "price" : 2.75,
    "changesPercentage" : -20.97701
  }, {
    "symbol" : "DYSL",
    "name" : "Dynasil Corporation of America",
    "change" : -0.49,
    "price" : 2.01,
    "changesPercentage" : -19.6
  }, {
    "symbol" : "SPCE",
    "name" : "Virgin Galactic Holdings, Inc.",
    "change" : -2.34,
    "price" : 10.03,
    "changesPercentage" : -18.916735
  }, {
    "symbol" : "KYMR",
    "name" : "Kymera Therapeutics, Inc.",
    "change" : -8.07,
    "price" : 42.68,
    "changesPercentage" : -15.901478
  }, {
    "symbol" : "PIK",
    "name" : "Kidpik Corp.",
    "change" : -1.14,
    "price" : 6.16,
    "changesPercentage" : -15.616443
  }
]
 
 






  constructor(private marketdata:MarketdataService){}
  ngOnInit(): void {
    // this.marketdata.getMajorIndices().subscribe(res=>{
    //   this.indices=res
    // })

    // this.marketdata.getMostGainers().subscribe(res=>{
    //   this.gainers=res
    // })

    // this.marketdata.getMostLosers().subscribe(res=>{
    //   this.losers=res
    // })
  }
  displayedColumns: string[] = ['name', 'price', 'changesPercentage'];
  dataSource = this.gainers;


  raiseCard(event: Event) {
    const card = event.currentTarget as HTMLElement;
    card.classList.toggle('raised');
  }
}
