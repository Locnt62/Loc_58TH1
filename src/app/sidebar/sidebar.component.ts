import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
import { Label, Color, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';
import { Chart } from 'chart.js';
const baseConfig: Chart.ChartConfiguration = {
  type: 'line',
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      xAxes: [{ display: false }],
      yAxes: [{ display: false }],
    }
  }
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChildren('pr_chart', { read: ElementRef }) chartElementRefs: QueryList<ElementRef>;
  chartsData: Chart.ChartData[] = [
    {
      labels: ['1500', '1600', '1700', '1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      datasets: [{
        data: [86, 378, 106, 306, 507, 111, 133, 221, 783, 5000],
        borderColor: 'red',
        fill: false
      }]
    },
    {
      labels: ['1500', '1600', '1700', '1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      datasets: [{
        data: [86, 378, 106, 306, 507, 111, 133, 221, 783, 5000].reverse(),
        borderColor: 'blue',
        fill: false
      }]
    }
  ];
  charts: Chart[] = []

  ngAfterViewInit() {
    this.charts = this.chartElementRefs.map((chartElementRef, index) => {
      const config = Object.assign({}, baseConfig, { data: this.chartData[index] });
      
      return new Chart(chartElementRef.nativeElement, config);
    });
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales', ['lin', 'Con']];
  public pieChartData: SingleDataSet = [200, 300, 100, 200];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: ChartType = 'radar';
  public radarChartLegend = true;
  public radarChartPlugins = [];

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  // onChartClick(event) {
  //   console.log(event);
  // }


  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }

}
