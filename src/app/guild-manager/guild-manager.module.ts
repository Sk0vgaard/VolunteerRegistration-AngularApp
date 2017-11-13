import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GuildmanagersComponent} from './guildmanagers/guildmanagers.component';
import {HttpClientModule} from '@angular/common/http';
import {gmRoutes} from './guildmanagers.routing';
import {GuildmanagerService} from './shared/guildmanager.service';
import {GmDetailComponent} from './gm-detail/gm-detail.component';
import {GmCreateComponent} from './gm-create/gm-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    gmRoutes,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [GuildmanagersComponent, GmDetailComponent, GmCreateComponent],
  providers: [GuildmanagerService]
})
export class GuildManagerModule { }
