import {Component, OnInit} from '@angular/core';
import {GuildManager} from '../shared/GuildManager';
import {GuildmanagerService} from '../shared/guildmanager.service';

@Component({
  selector: 'app-guildmanagers',
  templateUrl: './guildmanagers.component.html',
  styleUrls: ['./guildmanagers.component.css']
})
export class GuildmanagersComponent implements OnInit {

  guildManagers: GuildManager[];
  selectedManager: GuildManager;
  selectedRow: number;
  isUpdateClicked = false;

  constructor(private guildManagerService: GuildmanagerService) {}

  updateListOfVolunteers() {
    this.guildManagerService.get()
      .subscribe(guildMangers => this.guildManagers = guildMangers);
  }

  selectGuildmanager(guildManager: GuildManager, selectedRow: number) {
    this.selectedManager = guildManager;
    this.selectedRow = selectedRow;
    this.isUpdateClicked = false;
  }

  ngOnInit() {
    this.updateListOfVolunteers();
  }

}
