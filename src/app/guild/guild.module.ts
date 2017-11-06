import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuildsComponent } from './guilds/guilds.component';
import {guildRoutes} from './guild.routing';
import {HttpClientModule} from '@angular/common/http';
import { GuildDetailComponent } from './guilds/guild-detail/guild-detail.component';
import { GuildCreateComponent } from './guilds/guild-create/guild-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GuildService} from './shared/guild.service';


@NgModule({
  imports: [
    CommonModule,
    guildRoutes,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations:
    [GuildsComponent,
    GuildDetailComponent,
    GuildCreateComponent],
  providers: [GuildService]
})
export class GuildModule { }
