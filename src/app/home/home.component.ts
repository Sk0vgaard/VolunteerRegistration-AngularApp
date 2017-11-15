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
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 20
        }
      }]
    }
  };
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] =  [
    {data: [65], label: "Test"},
    {data: [65], label: "Test"}
  ];

  constructor(private guildService: GuildService) { }

  ngOnInit() {
    let i = 0;
    this.guilds = [];
    this.guildService.get()
      .subscribe(guilds => {
        guilds.forEach(guild => {
          console.log(guild.name);
          if (i === 0) {
            console.log("Data reset");
            this.barChartData = [];
          }
          i++;
          this.barChartLabels.push(guild.name);
          if (guild.guildWork != null && guild.guildWork.length > 0) {
            console.log("Will add GuildWork: " + guild.guildWork.length);
            this.barChartData.push({data: [guild.guildWork.length], label: guild.name});
          } else {
            console.log("No GuildWork!");
            this.barChartData.push(
              {data: [0], label: guild.name});
          }

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

}
