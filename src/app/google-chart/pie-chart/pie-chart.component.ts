import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  private gLib: any;

  constructor(
      private gChartService: GoogleChartService
    ) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit(): void {
  }

  private drawChart(){
    let chart = new this.gLib.visualization.PieChart(document.getElementById('divPieChart'));
    let data = new this.gLib.visualization.DataTable();
    data.addColumn('string', 'Accessories');
    data.addColumn('number', 'Quantity');
    data.addRows([
      ['Computers', 17],
      ['Hard Drives', 6],
      ['Printers', 4],
      ['Monitors', 5],
      ['RAM', 3]
    ]);

    let options = {
      'title':'Sales Info',
      'width': 600,
      'height': 400
    };

    chart.draw(data, options);
  }

}
