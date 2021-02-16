import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(readonly http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${environment.api.url}/api/admin/login`, null, {
      headers: {
        'Authorization': `Basic ${window.btoa(`${username}:${password}`)}`
      }
    });
  }

}
