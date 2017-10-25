import {RouterModule} from '@angular/router';
import {VolunteersComponent} from './volunteers/volunteers.component';

export const volunteerRoutes = RouterModule.forRoot(
  [
    {
      path: 'volunteers',
      component: VolunteersComponent
    }
  ]
);
