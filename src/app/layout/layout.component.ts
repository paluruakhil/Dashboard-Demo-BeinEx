import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-layout',
  template: `
    <div>
      <app-header (menuToggled)="toggle()"></app-header>

      <mat-drawer-container>
        <mat-drawer mode="side" [opened]="opened">
          <app-menu-item [menu]="menu"></app-menu-item>
        </mat-drawer>

        <mat-drawer-content [class.margin-left]="opened">
          <router-outlet></router-outlet>
        </mat-drawer-content>
      </mat-drawer-container>
    </div>
  `,
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Get Started',
      icon: 'widgets',
      link: '/get-started',
      color: '#ff7f0e',
    },
    {
      title: 'Overview',
      icon: 'area_chart',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Insights',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Insights 1',
          icon: 'money',
          link: '/insights-one',
          color: '#ff7f0e',
        },
        {
          title: 'Insights 2',
          icon: 'people',
          color: '#ff7f0e',
          link: '/insights-two',
        },
      ],
    },
    {
      title: 'Advertisers',
      icon: 'assignment_ind',
      link: '/advertisers',
      color: '#ff7f0e',
    },
    {
      title: 'Discover',
      icon: 'find_in_page',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Discover 1',
          icon: 'money',
          link: '/discover-one',
          color: '#ff7f0e',
        },
        {
          title: 'Discover 2',
          icon: 'people',
          color: '#ff7f0e',
          link: '/discover-two',
        },
      ],
    },
    {
      title: 'Tools',
      icon: 'business_center',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Tools 1',
          icon: 'money',
          link: '/tools-one',
          color: '#ff7f0e',
        },
        {
          title: 'Tools 2',
          icon: 'people',
          color: '#ff7f0e',
          link: '/tools-two',
        },
      ],
    }
  ];
}
