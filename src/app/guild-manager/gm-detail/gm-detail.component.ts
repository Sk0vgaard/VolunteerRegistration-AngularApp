import {Component, Input, OnInit} from '@angular/core';
import {GuildManager} from '../shared/GuildManager';

@Component({
  selector: 'app-gm-detail',
  templateUrl: './gm-detail.component.html',
  styleUrls: ['./gm-detail.component.css']
})
export class GmDetailComponent implements OnInit {
  @Input()
  guildManager: GuildManager;
  @Input()
  isUpdateable = false;

  constructor() { }

  ngOnInit() {
  }

}
