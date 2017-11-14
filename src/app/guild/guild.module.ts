import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuildsComponent } from './guilds/guilds.component';
import {guildRoutes} from './guild.routing';
import {HttpClientModule} from '@angular/common/http';
import { GuildDetailComponent } from './guilds/guild-detail/guild-detail.component';
import { GuildCreateComponent } from './guilds/guild-create/guild-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GuildService} from './shared/guild.service';
import {GuildWorkDetailsComponent} from '../guild-work/guild-work-details/guild-work-details.component';
import {GuildWorkModule} from '../guild-work/guild-work.module';


@NgModule({
  imports: [
    CommonModule,
    guildRoutes,
    ReactiveFormsModule,
    HttpClientModule,
    GuildWorkModule
  ],
  declarations:
    [GuildsComponent,
    GuildDetailComponent,
    GuildCreateComponent],
  providers: [GuildService]
})
export class GuildModule { }
