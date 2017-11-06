import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationBarComponent} from './shared/navigation-bar/navigation-bar.component';
import {appRoutes} from './app.routing';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {VolunteerModule} from './volunteer/volunteer.module';
import {GuildModule} from './guild/guild.module';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    VolunteerModule,
    GuildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
