import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationBarComponent} from './shared/navigation-bar/navigation-bar.component';
import {appRoutes} from './app.routing';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {VolunteerModule} from './volunteer/volunteer.module';
import { GuildsComponent } from './guild/guilds/guilds.component';
import { GuildDetailComponent } from './guild/guilds/guild-detail/guild-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PageNotFoundComponent,
    HomeComponent,
    GuildsComponent,
    GuildDetailComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    VolunteerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
