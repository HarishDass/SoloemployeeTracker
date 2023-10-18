import { Component } from '@angular/core';
import { HomeServiceService } from 'src/app/shared-module/services/home-service.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  basicData: any;
  basicOptions: any;
  x1: any;
  x2: any;
  constructor(private service: HomeServiceService) {
    this.service.getEmployee().subscribe((x: any) => {
      x.sort((a: any, b: any) => {
        if (a.department > b.department) {
          return -1;
        } else if (b.department < a.department) {
          return 1;
        }
        return 0;
      });
      console.log(x);

      let m = x.reduce((acc: any, cur: any) => {
        let currentVal = cur.department;
        acc[currentVal] = (acc[currentVal] || 0) + 1;
        return acc;
      }, {});
      this.x1 = Object.values(m);

      this.x2 = Object.keys(m);
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--text-color-secondary'
      );
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.basicData = {
        labels: this.x2,
        datasets: [
          {
            label: 'Sales',
            data: this.x1,
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgb(255, 159, 64)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
            ],
            borderWidth: 1,
          },
        ],
      };

      this.basicOptions = {
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };
    });
  }
}
