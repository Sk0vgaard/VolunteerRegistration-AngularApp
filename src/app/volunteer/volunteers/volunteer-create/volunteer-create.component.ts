import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VolunteerService} from '../../shared/volunteer.service';

@Component({
  selector: 'app-volunteer-create',
  templateUrl: './volunteer-create.component.html',
  styleUrls: ['./volunteer-create.component.css']
})
export class VolunteerCreateComponent implements OnInit {

  volunteerGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private volunteerService: VolunteerService) {
    this.volunteerGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

  saveVolunteer() {
    const values = this.volunteerGroup.value;
    this.volunteerService.create({
      name: values.name,
      email: values.email,
      phone: values.phone
    }).subscribe(volunteer => {
      this.volunteerGroup.reset();
    });
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
