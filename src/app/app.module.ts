import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { FormBuilder, FormGroup,Validators,FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DataSecurityandPrivacyComponent } from './data-securityand-privacy/data-securityand-privacy.component';
import { AllstocksComponent } from './allstocks/allstocks.component';
import { CreateportfolioComponent } from './createportfolio/createportfolio.component';
import { DetailsComponent } from './details/details.component';
import { HistoricalDataAnalysisComponent } from './historical-data-analysis/historical-data-analysis.component';
import { PortfolioAnalysisComponent } from './portfolio-analysis/portfolio-analysis.component';
import { PortfolioManagementComponent } from './portfolio-management/portfolio-management.component';
import { RealTimeDataUpdatesComponent } from './real-time-data-updates/real-time-data-updates.component';
import { ShowportfoliosComponent } from './showportfolios/showportfolios.component';
import { ViewstocksComponent } from './viewstocks/viewstocks.component';
import { PortfoliotrackingComponent } from './portfoliotracking/portfoliotracking.component';
import { GainerLoserComponent } from './gainer-loser/gainer-loser.component';
import { NewsComponent } from './news/news.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { MarketComponent } from './market/market.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DataSecurityandPrivacyComponent,
    AllstocksComponent,
    CreateportfolioComponent,
    DetailsComponent,
    HistoricalDataAnalysisComponent,
    PortfolioAnalysisComponent,
    PortfolioManagementComponent,
    RealTimeDataUpdatesComponent,
    ShowportfoliosComponent,
    ViewstocksComponent,
    PortfoliotrackingComponent,
    GainerLoserComponent,
    NewsComponent,
    MarqueeComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
