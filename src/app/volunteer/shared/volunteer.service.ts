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

  update(volunteer: Volunteer): Observable<Volunteer> {
    console.log(volunteer.id);
    return this.http.put<Volunteer>(url + '/' + volunteer.id, volunteer);
  }

  delete(id: number): Observable<boolean> {
    console.log(url + '/' + id);
    return this.http.delete<Boolean>(url + '/' + id);
  }
}
