import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VolunteersComponent} from './volunteers/volunteers.component';
import {volunteerRoutes} from './volunteer.routing';
import {VolunteerDetailComponent} from './volunteers/volunteer-detail/volunteer-detail.component';
import {VolunteerService} from './shared/volunteer.service';
import {HttpClientModule} from '@angular/common/http';
import {VolunteerCreateComponent} from './volunteers/volunteer-create/volunteer-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    volunteerRoutes,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations:
    [VolunteersComponent,
      VolunteerDetailComponent,
      VolunteerDetailComponent,
      VolunteerCreateComponent],
  providers: [VolunteerService]
})
export class VolunteerModule { }
