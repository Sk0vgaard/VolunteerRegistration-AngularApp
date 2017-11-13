
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Guild} from './guild.model';


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
}
