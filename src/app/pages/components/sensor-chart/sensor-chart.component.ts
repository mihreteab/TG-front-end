import { Component, OnInit, Input, AfterViewInit, OnDestroy, OnChanges, ViewChild } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { SensorService } from '../../../@core/mock/sensor.service';

@Component({
  selector: 'ngx-sensor-chart',
  templateUrl: './sensor-chart.component.html',
  styleUrls: ['./sensor-chart.component.scss']
})
export class SensorChartComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() title: string;
  @Input() data: any[] = [];
  @Input() labels: string[] = [];
  @Input() responsive: boolean = true;
  @Input() maintainAspectRatio: boolean = false;
  @Input() aspectRatio: number = 2;
  @Input() min: number | string = 0;
  @Input() max: number | string = 100;
  @Input() type: string = '';
  @Input() battery: number = 0;
  @Input() unit: string = '';
  @Input() stepSize: number = 100;
  @Input() temperature: number = 0;
  @Input() humidity: number = 0;

  options: any = {};
  chartData: any = {};
  variables: any;
  themeSubscription: any;
  flipped: boolean = false;
  batteryOptions: any = {};
  colors: any[] = [];
  
  
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
    this.generateBatteryOptions()
  }

  generateChart() {
    const chartjs = this.variables.chartjs;
    this.colors = [
      {
        backgroundColor: NbColorHelper.hexToRgbA(this.variables.primary, 0.3),
        borderColor: this.variables.primary,
      },
      {
        backgroundColor: NbColorHelper.hexToRgbA(this.variables.danger, 0.3),
        borderColor: this.variables.danger,
      },
      {
        backgroundColor: NbColorHelper.hexToRgbA(this.variables.info, 0.3),
        borderColor: this.variables.info,
      }
    ]
    this.options = {
      responsive: this.responsive,
      maintainAspectRatio: this.maintainAspectRatio,
      aspectRatio: this.aspectRatio,
      animation: {
        duration: 0
      },
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
              display: !!this.unit,
              labelString: this.unit,
              padding: 0
            },
            gridLines: {
              display: true,
              color: [chartjs.axisLineColor, 'red']
            },
            ticks: {
              // stepSize: this.stepSize,
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
    this.generateBatteryOptions()
  }

  generateBatteryOptions () {
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
              value: this.battery,
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
              value: 100 - this.battery,
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
