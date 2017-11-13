import {RouterModule} from '@angular/router';
import {GuildmanagersComponent} from './guildmanagers/guildmanagers.component';

export const  gmRoutes = RouterModule.forRoot(
  [
    {
      path: 'guildmanagers',
      component: GuildmanagersComponent
    }
  ]
);
