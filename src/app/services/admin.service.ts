import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(readonly http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.api.url}/api/admin/login/`, null, {
      headers: {
        Authorization: `Basic ${window.btoa(`${username}:${password}`)}`
      }
    });
  }

  getGuests(): Observable<any> {
    return this.http.get(`${environment.api.url}/api/admin/guest/`);
  }

  getGuestById(id: any): Observable<any> {
    return this.http.get(`${environment.api.url}/api/admin/guest/${id}/`);
  }

  addGuest(guest: any): Observable<any> {
    return this.http.post(`${environment.api.url}/api/admin/guest/`, guest);
  }

  removeGuestById(id: any): Observable<any> {
    return this.http.delete(`${environment.api.url}/api/admin/guest/${id}/`);
  }

  guestLogin(firstname: string, surname: string): Observable<any> {
    return this.http.post(`${environment.api.url}/api/guest/login/`, null, {
      headers: {
        Authorization: `Basic ${window.btoa(`${firstname}:${surname}`)}`
      }
    });
  }

}
