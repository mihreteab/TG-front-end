import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { LayoutService } from '../../../../@core/utils/layout.service';

@Component({
  selector: 'ngx-msla',
  styleUrls: ['./msla.component.scss'],
  templateUrl: './msla.component.html',
})
export class MslaComponent implements AfterViewInit, OnDestroy, OnChanges {
  private alive = true;

  @Input() value: number;

  options: any = {};
  chartData: any = {};
  themeSubscription: any;
  variables: any;

  constructor(private theme: NbThemeService,
              private layoutService: LayoutService) {
  }

  ngOnChanges(): void { }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.variables = config.variables;
      this.generateChartDataAndOption();
    })
  }

  generateChartDataAndOption() {
    const chartjs = this.variables.chartjs;
    this.chartData = {
      labels: ['','','','','','',''],
      datasets: [{
        data: [30, 50, 45, 68, 55, 60, 40],
        backgroundColor: 'transparent',
        borderColor: '#000',
      }],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 0, // general animation time
      },
      scales: {
        display: false,
        xAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false
            },
          },
        ],
      },
      legend: {
        display: false
      },
      elements: {
        point:{
            radius: 0
        }
      },
      tooltips: {
        filter: function (tooltipItem, data) {
          return false;
        }
      }
    };

  }

  ngOnDestroy() {
    this.alive = false;
  }
}
