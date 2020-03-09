import { Component, OnInit, Input, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { SensorService } from '../../../@core/mock/sensor.service';

@Component({
  selector: 'ngx-sensor-chart',
  templateUrl: './sensor-chart.component.html',
  styleUrls: ['./sensor-chart.component.scss']
})
export class SensorChartComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() title: string;
  @Input() data: any;
  @Input() responsive: boolean = true;
  @Input() maintainAspectRatio: boolean = false;
  @Input() aspectRatio: number = 2;
  @Input() max: number | string = 100;
  @Input() type: string = '';

  options: any = {};
  chartData: any = {};
  variables: any;
  themeSubscription: any;
  flipped: boolean = false;
  batteryOptions: any = {}
  batteryPercent: number = 40;

  constructor(private theme: NbThemeService, private sensorService: SensorService) {

  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.variables = config.variables;
      this.generateChart();
    })
  }

  ngOnChanges() {
    
  }

  generateChart() {
    const chartjs = this.variables.chartjs;
    const colors = this.variables;
    this.chartData = {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Sensor 1',
        backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
        borderColor: colors.primary,
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Sensor 2',
        backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.3),
        borderColor: colors.danger,
      }, {
        data: [18, 48, 77, 9, 100, 27, 40],
        label: 'Sensor 3',
        backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
        borderColor: colors.info,
      },
      ],
    };

    this.options = {
      responsive: this.responsive,
      maintainAspectRatio: this.maintainAspectRatio,
      aspectRatio: this.aspectRatio,
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: 'Date',
              padding: 0
            },
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
            scaleLabel: {
              display: true,
              labelString: 'Percentage',
              padding: 0
            },
            gridLines: {
              display: true,
              color: [chartjs.axisLineColor, 'red']
            },
            ticks: {
              stepSize: 10,
              max: typeof this.max === 'number' ? this.max : parseInt(this.max),
              fontColor: chartjs.textColor,
            },
          },
        ],
      },
      legend: {
        labels: {
          fontColor: chartjs.textColor,
        },
      },
    };
    const visitorsPie: any = this.variables.visitorsPie;

    this.batteryOptions = {
      tooltip: {
        trigger: 'item',
        formatter: '',
      },
      series: [
        {
          name: ' ',
          clockWise: true,
          hoverAnimation: false,
          type: 'pie',
          center: ['50%', '50%'],
          radius: visitorsPie.firstPieRadius,
          data: [
            {
              value: this.batteryPercent,
              name: ' ',
              label: {
                normal: {
                  position: 'center',
                  formatter: '',
                  textStyle: {
                    fontSize: '22',
                    fontFamily: this.variables.fontSecondary,
                    fontWeight: '600',
                    color: this.variables.fgHeading,
                  },
                },
              },
              tooltip: {
                show: false,
              },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: visitorsPie.firstPieGradientLeft,
                    },
                    {
                      offset: 1,
                      color: visitorsPie.firstPieGradientRight,
                    },
                  ]),
                  shadowColor: visitorsPie.firstPieShadowColor,
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowOffsetY: 3,
                },
              },
              hoverAnimation: false,
            },
            {
              value: 100 - this.batteryPercent,
              name: ' ',
              tooltip: {
                show: false,
              },
              label: {
                normal: {
                  position: 'inner',
                },
              },
              itemStyle: {
                normal: {
                  color: this.variables.layoutBg,
                },
              },
            },
          ],
        },
      ],
    };
  }

  toggleView () {
    this.flipped = !this.flipped;
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
