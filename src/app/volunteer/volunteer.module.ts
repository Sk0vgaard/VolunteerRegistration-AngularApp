import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VolunteersComponent} from './volunteers/volunteers.component';
import {volunteerRoutes} from './volunteer.routing';
import {VolunteerDetailComponent} from './volunteers/volunteer-detail/volunteer-detail.component';
import {VolunteerService} from './shared/volunteer.service';
import {HttpClientModule} from '@angular/common/http';
import {VolunteerCreateComponent} from './volunteers/volunteer-create/volunteer-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { VolunteerGuildsComponent } from './shared/volunteer-guilds/volunteer-guilds.component';

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
      VolunteerCreateComponent,
      VolunteerGuildsComponent],
  providers: [VolunteerService]
})
export class VolunteerModule { }
