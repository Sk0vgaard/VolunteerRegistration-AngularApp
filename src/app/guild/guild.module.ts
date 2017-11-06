import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuildsComponent } from './guilds/guilds.component';
import {guildRoutes} from './guild.routing';
import {HttpClientModule} from '@angular/common/http';
import { GuildDetailComponent } from './guilds/guild-detail/guild-detail.component';


@NgModule({
  imports: [
    CommonModule,
    guildRoutes,
    HttpClientModule
  ],
  declarations: [GuildsComponent, GuildDetailComponent]
})
export class GuildModule { }
