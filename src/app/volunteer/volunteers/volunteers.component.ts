import {Component, Input, OnInit} from '@angular/core';
import {Volunteer} from '../shared/volunteer.model';
import {VolunteerService} from '../shared/volunteer.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {
  volunteers: Volunteer[];
  selectedVolunteer: Volunteer;
  selectedRow: number;
  isUpdateClicked = false;

  constructor(private volunteerService: VolunteerService) { }


  ngOnInit() {
    this.volunteerService.get()
      .subscribe(volunteers => this.volunteers = volunteers);
  }

  selectVolunteer(volunteer: Volunteer, selectedRow: number) {
    this.selectedVolunteer = volunteer;
    this.selectedRow = selectedRow;
    this.isUpdateClicked = false;
  }

  setUpdate($event) {
    this.isUpdateClicked = !this.isUpdateClicked;
    $event.stopPropagation();
  }

  updateListOfVolunteers(){
    this.volunteerService.get()
      .subscribe(volunteers => this.volunteers = volunteers);
  }
}
