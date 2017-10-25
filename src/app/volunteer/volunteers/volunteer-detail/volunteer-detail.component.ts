import {Component, Input, OnInit} from '@angular/core';
import {Volunteer} from '../../shared/volunteer.model';

@Component({
  selector: 'app-volunteer-detail',
  templateUrl: './volunteer-detail.component.html',
  styleUrls: ['./volunteer-detail.component.css']
})
export class VolunteerDetailComponent implements OnInit {
  @Input()
  volunteer: Volunteer;

  constructor() { }

  ngOnInit() {
  }


}
