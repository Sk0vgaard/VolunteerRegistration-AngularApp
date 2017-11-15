import { Component, OnInit } from '@angular/core';
import {Guild} from '../shared/guild.model';
import {GuildService} from '../shared/guild.service';
import {GuildWork} from "../../guild-work/shared/guildWork.model";

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.css']
})
export class GuildsComponent implements OnInit {
  guilds: Guild[];
  selectedGuild: Guild;
  selectedRow: number;
  isUpdateClicked = false;
  guildWorks: GuildWork[];

  constructor(private guildService: GuildService) { }

  ngOnInit() {
    this.guilds = [];
    this.guildService.get()
      .subscribe(guilds => this.guilds = guilds);
  }

  selectGuild(guild: Guild, selectedRow: number) {
    this.selectedGuild = guild;
    this.selectedRow = selectedRow;
    this.isUpdateClicked = false;
    this.guildService.getGuildWorks(this.selectedGuild.id).subscribe(gw => this.guildWorks = gw);
  }

  setUpdate($event) {
    this.isUpdateClicked = !this.isUpdateClicked;
    $event.stopPropagation();
  }

  updateListOfGuilds() {
    this.guildService.get()
      .subscribe(guilds => this.guilds = guilds);
  }

  deleteGuild($event, guild: Guild) {
    this.guildService.delete(guild.id).subscribe(() => this.updateListOfGuilds());
    this.selectedGuild = null;
    $event.stopPropagation();
  }
}
