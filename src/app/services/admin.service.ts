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

  getGuestByRsvpCode(code: any): Observable<any> {
    return this.http.get(`${environment.api.url}/api/admin/guest/rsvp/${code}/`);
  }

  getGuestByGuestName(fname: any, lname: any): Observable<any> {
    return this.http.get(`${environment.api.url}/api/admin/guest/rsvp/${fname}/${lname}`);
  }

  addGuest(guest: any): Observable<any> {
    return this.http.post(`${environment.api.url}/api/admin/guest/`, guest);
  }

  removeGuestById(id: any): Observable<any> {
    return this.http.delete(`${environment.api.url}/api/admin/guest/${id}/`);
  }

  removeGuestParty(id: any): Observable<any> {
    return this.http.delete(`${environment.api.url}/api/admin/guest/party/${id}/`);
  }

  guestLogin(firstname: string, surname: string): Observable<any> {
    return this.http.post(`${environment.api.url}/api/guest/login/`, null, {
      headers: {
        Authorization: `Basic ${window.btoa(`${firstname}:${surname}`)}`
      }
    });
  }

  rsvpGuest(guestId: any, status: any): Observable<any> {
    return this.http.post(`${environment.api.url}/api/admin/guest/rsvp/${guestId}/${status}`, null);
  }

  rsvpGuestParty(GuestPartyId: any, status: any): Observable<any> {
    return this.http.post(`${environment.api.url}/api/admin/guestparty/rsvp/${GuestPartyId}/${status}`, null);
  }

  suggestSong(guestId: any, song: any): Observable<any> {
    return this.http.post(`${environment.api.url}/api/admin/guest/songsuggestion/${guestId}`, song);
  }

  removeSuggestedSong(id: any): Observable<any> {
    return this.http.delete(`${environment.api.url}/api/admin/guest/songsuggestion/${id}`);
  }

  sendInviteEmail(guestId: any, title: string): Observable<any> {
    return this.http.post(`${environment.api.url}/api/admin/guest/${guestId}/mail/invite`, {
      title
    });
  }
}
