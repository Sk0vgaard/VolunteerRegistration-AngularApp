import {Component, OnInit} from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {GuildService} from '../guild/shared/guild.service';
import {Guild} from '../guild/shared/guild.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  guilds: Guild[];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Alm job'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Flex job'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  public setNewValues(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
  changeChart() {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  constructor(private guildService: GuildService) { }

  ngOnInit() {
    this.guilds = [];
    this.barChartLabels = [];
    this.guildService.get()
      .subscribe(guilds => guilds.forEach(guild => this.barChartLabels.push(guild.name)));
  }
}
