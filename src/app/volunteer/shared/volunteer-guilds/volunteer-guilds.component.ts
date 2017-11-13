import {Component, Inject, Input, OnInit} from '@angular/core';
import {Guild} from '../../../guild/shared/guild.model';

@Component({
  selector: 'app-volunteer-guilds',
  templateUrl: './volunteer-guilds.component.html',
  styleUrls: ['./volunteer-guilds.component.css']
})
export class VolunteerGuildsComponent implements OnInit {

  @Input()
  guilds: Guild[];

  constructor() { }

  ngOnInit() {

  }

}
