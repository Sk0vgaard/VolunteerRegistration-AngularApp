
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Guild} from "./guild.model";

const url = environment.RestAPI + '/guilds';

@Injectable()
export class GuildService {

  constructor(private http: HttpClient) {}

    get(): Observable<Guild[]> {
      return this.http.get<Guild[]>(url);
  }
}
