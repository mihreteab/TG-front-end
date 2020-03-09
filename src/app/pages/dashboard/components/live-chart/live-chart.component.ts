import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { LayoutService } from '../../../../@core/utils/layout.service';

@Component({
  selector: 'ngx-live-chart',
  styleUrls: ['./live-chart.component.scss'],
  templateUrl: './live-chart.component.html',
})
export class LiveChartComponent implements AfterViewInit, OnDestroy, OnChanges {
  private alive = true;

  @Input() data: { label: string, value }[];
  @Input() color: string;
  @Input() limit: number;
  @Input() height: number;

  options: any = {};
  chartData: any = {};
  themeSubscription: any;
  colors: any;

  constructor(private theme: NbThemeService,
              private layoutService: LayoutService) {
  }

  ngOnChanges(): void { }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
      this.generateChartDataAndOption();
    })
  }

  generateChartDataAndOption() {
    const chartjs = this.colors.chartjs;
    const labels = this.data.map(item => item.label);
    const data: number[] = this.data.map(item => item.value);

    const suggestedMin = Math.floor(Math.min(...data) / 10) * 10 - 30;

    this.chartData = {
      labels,
      datasets: [{
        data,
        label: '',
        backgroundColor: NbColorHelper.hexToRgbA(this.color || this.colors.danger, 0.3),
        borderColor: this.color || this.colors.danger,
      }],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: true,
              color: chartjs.axisLineColor,
            },
            ticks: {
              fontColor: chartjs.textColor,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,              
              color: [chartjs.axisLineColor, 'red']
            },
            ticks: {
              fontColor: chartjs.textColor,
              suggestedMin: suggestedMin >= 0 ? suggestedMin : 0,
              // suggestedMax: 100,
              stepSize: 10
            },
          },
        ],
      },
      legend: {
        display: false
      },
    };

  }

  ngOnDestroy() {
    this.alive = false;
  }
}
