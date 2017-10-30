import {RouterModule} from '@angular/router';
import {VolunteersComponent} from './volunteers/volunteers.component';
import {VolunteerCreateComponent} from './volunteers/volunteer-create/volunteer-create.component';

export const volunteerRoutes = RouterModule.forRoot(
  [
    {
      path: 'volunteers',
      component: VolunteersComponent
    },
    {
      path: 'volunteer/create',
      component: VolunteerCreateComponent
    }
  ]
);
