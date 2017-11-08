import {RouterModule} from '@angular/router';
import {GuildsComponent} from './guilds/guilds.component';
import {GuildCreateComponent} from './guilds/guild-create/guild-create.component';

export const guildRoutes = RouterModule.forRoot(
  [
    {
      path: 'guilds',
      component: GuildsComponent
    },
    {
      path: 'guild/create',
      component: GuildCreateComponent
    }
  ]
);
