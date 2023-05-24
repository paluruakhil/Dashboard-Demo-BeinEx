import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./home/home.component";
import {InsightsOneComponent} from "./insights-one/insights-one.component";
import {ToolsOneComponent} from "./tools-one/tools-one.component";
import {ToolsTwoComponent} from "./tools-two/tools-two.component";
import {AdvertisersComponent} from "./advertisers/advertisers.component";
import {GetStartedComponent} from "./get-started/get-started.component";
import {DiscoverOneComponent} from "./discover-one/discover-one.component";
import {DiscoverTwoComponent} from "./discover-two/discover-two.component";
import {InsightsTwoComponent} from "./insights-two/insights-two.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'insights-one',
        component: InsightsOneComponent
      },
      {
        path: 'insights-two',
        component: InsightsTwoComponent
      },
      {
        path: 'tools-one',
        component: ToolsOneComponent
      },
      {
        path: 'tools-two',
        component: ToolsTwoComponent
      },
      {
        path: 'advertisers',
        component: AdvertisersComponent
      },
      {
        path: 'get-started',
        component: GetStartedComponent
      },
      {
        path: 'discover-one',
        component: DiscoverOneComponent
      },
      {
        path: 'discover-two',
        component: DiscoverTwoComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
