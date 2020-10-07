import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  private gLib: any;

  constructor(
    private gChartService: GoogleChartService
  ) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawMultSeries.bind(this));
  }

  ngOnInit(): void {
  }

  drawMultSeries() {
    let chart = new this.gLib.visualization.BarChart(document.getElementById('divBarChart'));
    let data = new this.gLib.visualization.arrayToDataTable([
      ['City', '2010 Population', '2000 Population'],
      ['New York City, NY', 8175000, 8008000],
      ['Los Angeles, CA', 3792000, 3694000],
      ['Chicago, IL', 2695000, 2896000],
      ['Houston, TX', 2099000, 1953000],
      ['Philadelphia, PA', 1526000, 1517000]
    ]);

    let options = {
      title: 'Population of Largest U.S. Cities',
      'width': 800,
      'height': 400,
      chartArea: {width: '50%'},
      hAxis: {
        title: 'Total Population',
        minValue: 0
      },
      vAxis: {
        title: 'City'
      }
    };

    chart.draw(data, options);
  }

}
