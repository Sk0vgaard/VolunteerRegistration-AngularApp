import { Component, OnInit } from '@angular/core';
import {Guild} from "../shared/guild.model";
import {GuildService} from "../shared/guild.service";

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.css']
})
export class GuildsComponent implements OnInit {

  guilds: Guild[];
  selectGuild: Guild;
  selectedRow: number;
  isUpdateClicked = false;

  constructor(private guildService: GuildService) { }

  ngOnInit() {
    this.guilds = [];
    this.updateListOfGuilds();
  }

  selectedGuild(guild: Guild, selectedRow: number) {
    this.selectGuild = guild;
    this.selectedRow = selectedRow;
    this.isUpdateClicked = false;
  }

  setUpdate($event) {
    this.isUpdateClicked = !this.isUpdateClicked;
    $event.stopPropagation();
  }

  updateListOfGuilds() {
    this.guildService.get()
      .subscribe(guilds => this.guilds = guilds);
  }

  // deleteGuild($event, guild: Guild) {
  //   this.guildService.delete(guild.id)
  //     .subscribe(() => this.updateListOfGuilds());
  //   this.selectedGuild = null;
  //   $event.stopPropagation();
  // }
}
