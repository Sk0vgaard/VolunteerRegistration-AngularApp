import {RouterModule} from '@angular/router';
import {GuildmanagersComponent} from './guildmanagers/guildmanagers.component';
import {GmCreateComponent} from './gm-create/gm-create.component';

export const  gmRoutes = RouterModule.forRoot(
  [
    {
      path: 'guildmanagers',
      component: GuildmanagersComponent
    },
    {
      path: 'guildmanagers/create',
      component: GmCreateComponent
    }
  ]
);
