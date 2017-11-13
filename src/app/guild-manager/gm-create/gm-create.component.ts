import {Component, OnInit} from '@angular/core';
import {GuildmanagerService} from '../shared/guildmanager.service';
import {Guild} from '../../guild/shared/guild.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-gm-create',
  templateUrl: './gm-create.component.html',
  styleUrls: ['./gm-create.component.css']
})
export class GmCreateComponent implements OnInit {

  guildManagerGroup: FormGroup;
  availableGuilds: Guild[];
  selectedGuilds: Guild[];

  constructor(private fb: FormBuilder,
              private guildManagerService: GuildmanagerService) {
    this.guildManagerGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    this.selectedGuilds = [];
    this.availableGuilds = [{name: 'Guild 1'}, {name: 'Guild 2'}, {name: 'Guild 3'}];
  }

  saveGuildManager() {
    const values = this.guildManagerGroup.value;
    this.guildManagerService.create({
      name: values.name,
      email: values.email,
      phone: values.phone
    }).subscribe(gm => {
      this.guildManagerGroup.reset();
    });
  }

  isInvalid(controlName: string) {
    const control = this.guildManagerGroup.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  isValid(controlName: string) {
    const control = this.guildManagerGroup.controls[controlName];
    return !control.invalid && (control.touched || control.dirty);
  }

  selectGuild(guild: Guild, index: number) {
    this.selectedGuilds.push(guild);
    this.availableGuilds.splice(index, 1);
  }

  unselectGuild(guild: Guild, index: number) {
    this.availableGuilds.push(guild);
    this.selectedGuilds.splice(index, 1);
  }
}
