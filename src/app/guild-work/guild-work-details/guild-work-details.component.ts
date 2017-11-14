import {Component, Input, OnInit} from '@angular/core';
import {GuildWork} from '../shared/guildWork.model';
import {GuildService} from '../../guild/shared/guild.service';
import {validateStyleParams} from '@angular/animations/browser/src/util';
import {Guild} from '../../guild/shared/guild.model';

@Component({
  selector: 'app-guild-work-details',
  templateUrl: './guild-work-details.component.html',
  styleUrls: ['./guild-work-details.component.css']
})
export class GuildWorkDetailsComponent implements OnInit {


  @Input()
  guild: Guild;
  @Input()
  guildWork: GuildWork[];



  constructor() { }

  ngOnInit() {
  }


}
