import {Component, Input, OnInit} from '@angular/core';
import {GuildManager} from '../shared/GuildManager.model';
import {GuildmanagerService} from '../shared/guildmanager.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GuildmanagersComponent} from '../guildmanagers/guildmanagers.component';

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
  guildManagerGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private guildManagerService: GuildmanagerService,
              private guildManagersComponent: GuildmanagersComponent) {
    this.guildManagerGroup = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.minLength(5)]]
      }
    );
  }

  ngOnInit() {
  }

  updateGuildManager() {
    console.log('Saved has been clicked');
    const values = this.guildManagerGroup.value;
    this.guildManagerService.update( {
      id: this.guildManager.id,
      name: values.name,
      email: values.email
    }).subscribe(guild => {
      this.guildManager = guild,
        this.guildManagerGroup.reset(),
        this.isUpdateable = false,
        this.guildManagersComponent.updateListOfGuildmanagers();
    });
  }

  cancelUpdate() {
    this.isUpdateable = false;
    this.guildManagersComponent.isUpdateClicked = false;
    this.guildManagerGroup.reset();
  }
  isInvalid(controlName: string) {
    const control = this.guildManagerGroup.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }
  isValid(controlName: string) {
    const control = this.guildManagerGroup.controls[controlName];
    return !control.invalid && (control.touched || control.dirty);
  }

}
