import {Component, Input, OnInit} from '@angular/core';
import {Guild} from '../../shared/guild.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GuildService} from '../../shared/guild.service';
import {GuildsComponent} from '../guilds.component';
import {GuildWork} from '../../../guild-work/shared/guildWork.model';

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
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {

  }

  updateGuild() {
    console.log('Saved has been clicked');
    const values = this.guildGroup.value;
    this.guildService.update( {
      id: this.guild.id,
      name: values.name
    }).subscribe(guild => {
      this.guild = guild,
        this.guildGroup.reset(),
        this.isUpdateable = false,
        this.guildComponent.updateListOfGuilds();
    });
  }
  cancelUpdate() {
    this.isUpdateable = false;
    this.guildComponent.isUpdateClicked = false;
    this.guildGroup.reset();
  }
  isInvalid(controlName: string) {
    const control = this.guildGroup.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }
  isValid(controlName: string) {
    const control = this.guildGroup.controls[controlName];
    return !control.invalid && (control.touched || control.dirty);
  }
}
