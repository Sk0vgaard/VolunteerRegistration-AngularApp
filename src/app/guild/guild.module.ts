import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuildsComponent } from './guilds/guilds.component';
import {guildRoutes} from './guild.routing';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    guildRoutes,
    HttpClientModule
  ],
  declarations: [GuildsComponent]
})
export class GuildModule { }
