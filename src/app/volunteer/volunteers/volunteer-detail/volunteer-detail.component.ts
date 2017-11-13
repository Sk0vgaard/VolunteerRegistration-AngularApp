import {Component, Input, OnInit} from '@angular/core';
import {Volunteer} from '../../shared/volunteer.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VolunteerService} from '../../shared/volunteer.service';
import {VolunteersComponent} from "../volunteers.component";
import {Guild} from "../../../guild/shared/guild.model";

@Component({
  selector: 'app-volunteer-detail',
  templateUrl: './volunteer-detail.component.html',
  styleUrls: ['./volunteer-detail.component.css']
})
export class VolunteerDetailComponent implements OnInit {
  @Input()
  volunteer: Volunteer;
  @Input()
  isUpdateable = false;

  guildsOnVolunteer: Guild[];

  volunteerGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private volunteerService: VolunteerService,
              private volunteerComponent: VolunteersComponent) {
    this.volunteerGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    this.guildsOnVolunteer = [{name : 'Fake1'}, {name: 'FakeTwo'}];
  }


  updateVolunteer() {
    console.log('Saved has been clicked!');
    const values = this.volunteerGroup.value;
    this.volunteerService.update({
      id: this.volunteer.id,
      name:  values.name,
      email: values.email,
      phone: values.phone
    }).subscribe(volunteer => {
      this.volunteer = volunteer,
        this.volunteerGroup.reset(),
        this.isUpdateable = false,
        this.volunteerComponent.isUpdateClicked = false,
      this.volunteerComponent.updateListOfVolunteers();
    });
  }

  cancelUpdate() {
    this.isUpdateable = false;
    this.volunteerComponent.isUpdateClicked = false;
    this.volunteerGroup.reset();
  }

  isInvalid(controlName: string) {
    const control = this.volunteerGroup.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  isValid(controlName: string) {
    const control = this.volunteerGroup.controls[controlName];
    return !control.invalid && (control.touched || control.dirty);
  }
}
