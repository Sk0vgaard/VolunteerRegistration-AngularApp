import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GuildmanagersComponent} from './guildmanagers/guildmanagers.component';
import {HttpClientModule} from '@angular/common/http';
import {gmRoutes} from './guildmanagers.routing';
import {GuildmanagerService} from './shared/guildmanager.service';

@NgModule({
  imports: [
    CommonModule,
    gmRoutes,
    HttpClientModule
  ],
  declarations: [GuildmanagersComponent],
  providers: [GuildmanagerService]
})
export class GuildManagerModule { }
