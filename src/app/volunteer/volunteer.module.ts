import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VolunteersComponent} from './volunteers/volunteers.component';
import {volunteerRoutes} from './volunteer.routing';
import {VolunteerDetailComponent} from './volunteers/volunteer-detail/volunteer-detail.component';
import {VolunteerService} from './shared/volunteer.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    volunteerRoutes,
    HttpClientModule
  ],
  declarations: [VolunteersComponent, VolunteerDetailComponent, VolunteerDetailComponent],
  providers: [VolunteerService]
})
export class VolunteerModule { }
