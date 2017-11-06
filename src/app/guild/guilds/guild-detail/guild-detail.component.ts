import {Component, Input, OnInit} from '@angular/core';
import {Guild} from '../../shared/guild.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GuildService} from "../../shared/guild.service";
import {GuildsComponent} from "../guilds.component";

@Component({
  selector: 'app-guild-detail',
  templateUrl: './guild-detail.component.html',
  styleUrls: ['./guild-detail.component.css']
})
export class GuildDetailComponent implements OnInit {

   @Input()
   guild: Guild;
  @Input()
  isUpdateable = false;

  guildGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private guildService: GuildService,
              private guildComponent: GuildsComponent) {
    this.guildGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit() {}

}
