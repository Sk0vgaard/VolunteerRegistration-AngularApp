import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VolunteersComponent} from './volunteers/volunteers.component';
import {volunteerRoutes} from './volunteer.routing';
import {VolunteerComponent} from './volunteers/volunteer/volunteer.component';

@NgModule({
  imports: [
    CommonModule,
    volunteerRoutes
  ],
  declarations: [VolunteersComponent, VolunteerComponent]
})
export class VolunteerModule { }
