import {Component, Input, OnInit} from '@angular/core';
import {Guild} from '../../guild/shared/guild.model';
import {Volunteer} from '../../volunteer/shared/volunteer.model';
import {VolunteerService} from '../../volunteer/shared/volunteer.service';
import {GuildService} from '../../guild/shared/guild.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-guild-work',
  templateUrl: './guild-work.component.html',
  styleUrls: ['./guild-work.component.css']
})
export class GuildWorkComponent implements OnInit {

  guilds: Guild[];
  volunteers: Volunteer[];

  startMoment: Date = new Date();
  endMoment: Date = new Date();
  showStart = false;
  showEnd = false;

  volunteer: Volunteer;
  selectedVolunteerRow: number;

  guild: Guild;
  selectedGuildRow: number;


  constructor(private volunteerService: VolunteerService, private guildService: GuildService) {  }

  ngOnInit() {
    this.guilds = [];
    this.volunteers = [];
    this.updateVolunteerList();
    this.updateGuildList();
  }

  updateVolunteerList() {
    this.volunteerService.get().subscribe(volunteers => this.volunteers = volunteers);
  }

  updateGuildList() {
    this.guildService.get().subscribe(guilds => this.guilds = guilds);
  }

  selectVolunteer(volunteer: Volunteer, index: number) {
    this.volunteer = volunteer;
    this.selectedVolunteerRow = index;
  }

  selectGuild(guild: Guild, index: number) {
    this.guild = guild;
    this.selectedGuildRow = index;
  }

  clearSelectedDetails() {
    this.guild = null;
    this.volunteer = null;
    this.showStart = false;
    console.log(this.showStart);
    this.showEnd = false;
  }

  setStart() {
    this.showStart = true;
    console.log(this.showStart);
  }

  setEnd() {
    this.showEnd = true;
  }

  ableToSave(): boolean {
    if (this.guild != null && this.volunteer != null && this.showStart && this.showEnd) return true;
    return false;
  }

  saveGuildWork() {
    // this.guild.
  }
}
