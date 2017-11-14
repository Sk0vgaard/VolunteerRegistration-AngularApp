import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuildWorkComponent } from './guild-work/guild-work.component';
import {HttpClientModule} from '@angular/common/http';
import {guildworkRoutes} from './guild-work.routing';
import {DateTimePickerModule} from 'ng-pick-datetime';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GuildWorkDetailsComponent } from './guild-work-details/guild-work-details.component';

@NgModule({
  imports: [
    CommonModule,
    guildworkRoutes,
    HttpClientModule,
    FormsModule,
    DateTimePickerModule,
    BrowserAnimationsModule
  ],
  exports: [GuildWorkDetailsComponent],
  declarations: [GuildWorkComponent, GuildWorkDetailsComponent]
})
export class GuildWorkModule { }
