import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Volunteer} from './volunteer.model';

const url = environment.RestAPI + '/volunteers';

@Injectable()
export class VolunteerService {

  constructor(private http: HttpClient) { }

  get(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(url);
  }

  create(volunteer: Volunteer): Observable<Volunteer> {
    return this.http.post<Volunteer>(url, volunteer);
  }
}
