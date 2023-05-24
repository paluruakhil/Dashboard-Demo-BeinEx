import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MenuItemComponent} from "./layout/menu-item/menu-item.component";
import {HeaderComponent} from "./layout/header.component";
import {LayoutComponent} from "./layout/layout.component";
import {PageHeaderComponent} from "./layout/page-header.component";
import { InsightsOneComponent } from './insights-one/insights-one.component';
import { InsightsTwoComponent } from './insights-two/insights-two.component';
import { ToolsOneComponent } from './tools-one/tools-one.component';
import { ToolsTwoComponent } from './tools-two/tools-two.component';
import { DiscoverOneComponent } from './discover-one/discover-one.component';
import { DiscoverTwoComponent } from './discover-two/discover-two.component';
import { AdvertisersComponent } from './advertisers/advertisers.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { NgChartsModule } from 'ng2-charts';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { CommonComponent } from './common/common.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuItemComponent,
    PageHeaderComponent,
    HomeComponent,
    InsightsOneComponent,
    InsightsTwoComponent,
    ToolsOneComponent,
    ToolsTwoComponent,
    DiscoverOneComponent,
    DiscoverTwoComponent,
    AdvertisersComponent,
    GetStartedComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatMenuModule,
    NgChartsModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
