import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuildsComponent } from './guilds/guilds.component';
import {guildRoutes} from './guild.routing';


@NgModule({
  imports: [
    CommonModule,
    guildRoutes
  ],
  declarations: [GuildsComponent]
})
export class GuildModule { }
