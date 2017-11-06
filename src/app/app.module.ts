import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GenerateReportComponent } from './pep/generate-report/generate-report.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ImGenerateReportComponent } from './im/im-generate-report/im-generate-report.component';
import { HsGenerateReportComponent } from './hs/hs-generate-report/hs-generate-report.component';

const appRoutes: Routes = [
  { path: 'pep/generate-report', component: GenerateReportComponent },
  { path: 'home',      component: HomeComponent },
   { path: 'home-client',      component: HomeClientComponent },
   { path: 'im/generate-report',      component: ImGenerateReportComponent },
   { path: 'hs/generate-report',      component: HsGenerateReportComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GenerateReportComponent,
    SideBarComponent,
    HomeComponent,
    HomeClientComponent,
    TopBarComponent,
    ImGenerateReportComponent,
    HsGenerateReportComponent
  ],
  imports: [
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
