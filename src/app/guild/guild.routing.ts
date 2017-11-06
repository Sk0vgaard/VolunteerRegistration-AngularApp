import {RouterModule} from '@angular/router';
import {GuildsComponent} from './guilds/guilds.component';

export const guildRoutes = RouterModule.forRoot(
  [
    {
      path: 'guilds',
      component: GuildsComponent
    }
  ]
);
