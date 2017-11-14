import {Component, OnInit} from '@angular/core';
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
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] =  [
    {data: [65], label: "test"}
  ];

  constructor(private guildService: GuildService) { }

  ngOnInit() {
    this.guilds = [];
    this.guildService.get()
      .subscribe(guilds => {
        guilds.forEach(g => {
          guilds.push(g);
          console.log(g.name);
          if (this.guilds.length === 0) {
            this.barChartData = [];
            // this.barChartLabels = [];
          }
          this.barChartLabels.push(g.name);
          this.barChartData.push({data: [65, 32, 12], label: g.name});
        });
      });
  }




  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
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

}
