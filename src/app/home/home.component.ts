import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchHttpService } from '../http/test-api';
// import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ChartComponent } from 'ng-apexcharts';
declare var ApexCharts: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public chartOptions: any;

  public hidden: boolean = true;
  public route: any;
  public fragment: any;
  chart: any;
  chart4: any;
  chart1: any;
  chart_1: any;
  countda: any;
  countcdt: any;
  counttda: any;
  countuser: any;
  constructor( private searchHttpService: SearchHttpService, ) { }

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      }
    };
    // this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.Initchart()
    this.Countda()
    this.CountTDA()
    this.CountUser()
 this.CountCDT()
  }


  Initchart() {
    this.chart4 = {
      series: [ 60, 40],
      labels: ['Đã hoàn thành', 'Chưa hoàn thành'],
      colors: ['#62b58f', '#f2726f'],
      chart: {
        type: 'pie',
        height: 300,
        width: 500
      },
      dataLabels: {
        enabled: true,
      },
      fill: {
        type: "gradient"
      },
      legend: {
        show: true,
      },
      // tooltip: {
      //   custom: function({series, seriesIndex, dataPointIndex, w}) {
      //     return '<div class="arrow_box">' +
      //       '<span>' + series[seriesIndex] + '%' + '</span>' +
      //       '</div>'
      //   }},

      //   custom: function(val){
      //     return Math.round(val);
      //   }
      // },

      responsive: [{
        breakpoint: 576,
        options: {
          chart: {
            width: '100%'
          },
          legend: {
            position: 'bottom',
            fontSize: '13px',
            // width: 140,
            height: 60
          },
          plotOptions: {
            pie: {
              donut: {
                size: '10%'
              },
              dataLabels: {
                offset: -10
              },
              labels: {
                show: true,
              }
            }
          }
        }
      }]
    };
    this.chart = new ApexCharts(document.querySelector("#chart1"), this.chart4);
    this.chart.render();


    this.chart1 = {
      series: [{
        name: 'Dự án',
        data: [10,25,56,110,75]
      }, {
        name: 'Tiểu dự án ',
        data: [25,40,65,50,45]
      }],
      chart: {
        height: 350,
        width: 600,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: [3, 3, 3, 3, 3],
        curve: ['straight', 'straight', 'straight', 'straight', 'straight'],
        colors: ['#008b20', '#FF1654', '#247BA0', '#f5720E', '#17098f']
      },
      responsive: [{
        breakpoint: 415,
        options: {
          chart: {
            height: '300px',
            // width: '430px',
            zoom: {
              enabled: false
            },

          },
        },
      }, {
        breakpoint: 376,
        options: {
          chart: {
            height: '250px',
            // width: '430px',
            zoom: {
              enabled: false
            },

          },
        },
      }],
      markers: {
        size: 4,
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        colors: ['#008b20', "#FF1654", "#247BA0", "#f5720E", '#17098f']
      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1]
      },
      colors: ['#008b20', "#FF1654", "#247BA0", "#f5720E", '#17098f'],
      tooltip: {
        enabled: true,
        marker: {
          show: true,
        },

      },
      xaxis: {
        categories: ['Q1/2019','Q2/2019','Q3/2019','Q4/2019','Q1/2020'],
      },
      yaxis: [{
        title: {
          text: 'Vốn đầu tư trung bình',
          style: {
            fontSize: '13px',
            fontWeight: '400',
            fontFamily: undefined,
            color: 'black'
          },
        },
        labels: {
        },
      }]
    };

    this.chart_1 = new ApexCharts(document.querySelector("#chartTuongTac"), this.chart1);
    this.chart_1.render();
  }

  
  Countda(){
    this.searchHttpService.Count(1).subscribe(dt =>{
      console.log('count dự án');
      this.countda = dt
      console.log(this.countda)
    })
  }

  CountCDT(){
    this.searchHttpService.Count(2).subscribe(dt =>{
      console.log('count chu dau tu');
      this.countcdt = dt
      console.log(this.countcdt)
    })
  }
  CountTDA(){
    this.searchHttpService.Count(3).subscribe(dt =>{
      console.log('count tieu du an');
      this.counttda = dt
      console.log(this.counttda)
    })
  }
  CountUser(){
    this.searchHttpService.Count(4).subscribe(dt =>{
      console.log('count user');
      this.countuser = dt
      console.log(this.countuser)
    })
  }

  ngAfterViewChecked(): void {
    try {
      if (this.fragment) {
        document.querySelector('#' + this.fragment).scrollIntoView();
      }
    } catch (e) { }
  }
}
