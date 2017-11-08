import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuildWorkComponent } from './guild-work/guild-work.component';
import {guildRoutes} from '../guild/guild.routing';
import {HttpClientModule} from '@angular/common/http';
import {guildworkRoutes} from './guild-work.routing';

@NgModule({
  imports: [
    CommonModule,
    guildworkRoutes,
    HttpClientModule
  ],
  declarations: [GuildWorkComponent]
})
export class GuildWorkModule { }
