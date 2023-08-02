import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateportfolioComponent } from './createportfolio/createportfolio.component';
import { ShowportfoliosComponent } from './showportfolios/showportfolios.component';
import { DetailsComponent } from './details/details.component';
import { ViewstocksComponent } from './viewstocks/viewstocks.component';
import { PortfoliotrackingComponent } from './portfoliotracking/portfoliotracking.component';
import { PortfolioAnalysisComponent } from './portfolio-analysis/portfolio-analysis.component';
import { DataSecurityandPrivacyComponent } from './data-securityand-privacy/data-securityand-privacy.component';
import { HistoricalDataAnalysisComponent } from './historical-data-analysis/historical-data-analysis.component';
import { PortfolioManagementComponent } from './portfolio-management/portfolio-management.component';
import { RealTimeDataUpdatesComponent } from './real-time-data-updates/real-time-data-updates.component';
import { GainerLoserComponent } from './gainer-loser/gainer-loser.component';
import { AllstocksComponent } from './allstocks/allstocks.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { MarketComponent } from './market/market.component';


const routes: Routes = [
  {
     path: '', 
    component: HeaderComponent
  },
  { 
    path:'dashboard',
    component: DashboardComponent
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
   component: SignupComponent
  },
  {
    path:'details',
    component: DetailsComponent
  },
  {
    path:'createportfolio',
    component:CreateportfolioComponent
  },
  {
    path:'yourportfolios',
    component:ShowportfoliosComponent
  },
  {
    path:'viewstocks/:id',
    component:ViewstocksComponent
  },
  {
    path:'portfoliotracking',
    component:PortfoliotrackingComponent
  },
  {
    path:'portfolio-analysis',
    component:PortfolioAnalysisComponent
  },
  {
    path:'data-securityand-privacy',
    component:DataSecurityandPrivacyComponent
  },
  {
    path:'historical-data-analysis',
    component:HistoricalDataAnalysisComponent
  },
  {
    path:'portfolio-management',
    component:PortfolioManagementComponent
  },
  {
    path:'real-time-data-updates',
    component:RealTimeDataUpdatesComponent
  },
  {
    path:'gainer-loser',
    component:GainerLoserComponent
  },
  {
    path:'allstocks',
    component:AllstocksComponent
  },
  {
    path:'marquee',
    component:MarqueeComponent
  },
  {
    path:'market',
    component:MarketComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
