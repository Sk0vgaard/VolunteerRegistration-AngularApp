
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Guild} from './guild.model';
import {GuildWork} from "../../guild-work/shared/guildWork.model";


const url = environment.RestAPI + '/guilds';


@Injectable()
export class GuildService {

  constructor(private http: HttpClient) {}

  get(): Observable<Guild[]> {
    return this.http.get<Guild[]>(url);
  }
  create(guild: Guild): Observable<Guild> {
    return this.http.post<Guild>(url, guild);
  }
  update(guild: Guild): Observable<Guild> {
    console.log(guild.id);
    return this.http.put<Guild>(url + '/' + guild.id, guild);
  }
  delete(id: number): Observable<boolean> {
    console.log(url + '/' + id);
    return this.http.delete<Boolean>(url + '/' + id);
  }

  getGuildWorks(id: number): Observable<GuildWork[]> {
    const guildWorkURL = url + '/guildWork?id=' + id;
    return this.http.get<GuildWork[]>(guildWorkURL);
  }
}
