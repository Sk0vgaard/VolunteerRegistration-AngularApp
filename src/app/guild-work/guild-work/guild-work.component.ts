import {Component, Input, OnInit} from '@angular/core';
import {Guild} from '../../guild/shared/guild.model';
import {Volunteer} from '../../volunteer/shared/volunteer.model';
import {VolunteerService} from '../../volunteer/shared/volunteer.service';

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

  volunteer: Volunteer;
  selectedRow: number;

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
    this.guilds = [];
    this.volunteers = [];
    this.updateVolunteerList();
  }

  updateVolunteerList() {
    this.volunteerService.get().subscribe(volunteers => this.volunteers = volunteers);
  }

  selectVolunteer(volunteer: Volunteer, index: number) {
    this.volunteer = volunteer;
    this.selectedRow = index;
  }
}
