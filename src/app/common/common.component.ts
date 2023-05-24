import {Component, Input, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartEvent, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent {

  cardData = [
    {
      name: 'Page Views',
      value: this.randomThreeFromInterval(),
      increaseValue: `${this.randomDecFromInterval()}%`,
      desc: `EPC ${this.randomDecFromInterval()} USD`
    },
    {
      name: 'Clicks',
      value: this.randomThreeFromInterval(),
      increaseValue: `${this.randomDecFromInterval()}%`,
      desc: `EPC ${this.randomDecFromInterval()} USD`
    },
    {
      name: 'Conversations',
      value: this.randomThreeFromInterval(),
      increaseValue: `${this.randomDecFromInterval()}%`,
      desc: `EPC ${this.randomDecFromInterval()} USD`
    },
    {
      name: 'Commission',
      value: this.randomThreeFromInterval(),
      increaseValue: `${this.randomDecFromInterval()}%`,
      desc: `EPC ${this.randomDecFromInterval()} USD`
    }
  ]

  constructor() {
    // Chart.register(Annotation)
  }

  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.getRandomDigits(),
        label: 'Page Views',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: this.getRandomDigits(),
        label: 'Clicks',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: this.getRandomDigits(),
        label: 'Conversations',
        // yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: this.getRandomDigits(),
        label: 'Commission',
        //  yAxisID: 'y1',
        backgroundColor: 'rgba(255,4,0,0.3)',
        borderColor: 'Black',
        pointBackgroundColor: 'rgba(0,0,177,0)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,0,0.8)',
        fill: 'origin',
      }
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };

  getRandomDigits(){
    let arr = [];
    for(let i = 0 ;i<=7;i++){
      arr.push(this.randomIntFromInterval())
    }
    return arr;
  }

  randomIntFromInterval(min:number=0, max:number=1000) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  randomDecFromInterval() { // min and max included
    return Math.floor(Math.random() * (1000 - 100) + 100) / 100;
  }

  randomThreeFromInterval() { // min and max included
    return Math.floor(Math.random() * (10000 - 100) + 10000) / 100;
  }

  // @ts-ignore
  // @ts-ignore
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
        {
          position: 'left',
        },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }


  // events
  public chartClicked({event, active}: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}
