import {RouterModule} from '@angular/router';
import {GuildWorkComponent} from './guild-work/guild-work.component';

export const guildworkRoutes = RouterModule.forRoot(
  [
    {
      path: 'guildwork',
      component: GuildWorkComponent
    }
  ]
);
