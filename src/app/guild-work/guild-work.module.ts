import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuildWorkComponent } from './guild-work/guild-work.component';
import {HttpClientModule} from '@angular/common/http';
import {guildworkRoutes} from './guild-work.routing';
import {DateTimePickerModule} from 'ng-pick-datetime';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    guildworkRoutes,
    HttpClientModule,
    FormsModule,
    DateTimePickerModule,
    BrowserAnimationsModule
  ],
  declarations: [GuildWorkComponent]
})
export class GuildWorkModule { }
