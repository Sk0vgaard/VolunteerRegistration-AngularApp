import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GuildManager} from './GuildManager';
import {environment} from '../../../environments/environment';

const url = environment.RestAPI + '/guildmanagers';


@Injectable()
export class GuildmanagerService {

  constructor(private http: HttpClient) { }

  get(): Observable<GuildManager[]> {
    return this.http.get<GuildManager[]>(url);
  }

  create(gm: GuildManager): Observable<GuildManager> {
    return this.http.post<GuildManager>(url, gm);
  }
}
