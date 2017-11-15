import {Component, Input, OnInit} from '@angular/core';
import {Guild} from '../../shared/guild.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GuildService} from '../../shared/guild.service';
import {GuildsComponent} from '../guilds.component';

@Component({
  selector: 'app-guild-create',
  templateUrl: './guild-create.component.html',
  styleUrls: ['./guild-create.component.css']
})
export class GuildCreateComponent implements OnInit {

  guildGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private guildService: GuildService) {
      this.guildGroup = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]]
      });
  }

  ngOnInit() {
  }

  saveGuild() {
    const values = this.guildGroup.value;
    this.guildService.create({
      name: values.name
    }).subscribe(guild => {
      this.guildGroup.reset();
    });
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
