import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {

    constructor(private http: HttpClient) { }

    getTracks(query: string, token: string): Observable<any> {
        const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10&offset=0`;
        return this.http.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .pipe(
                map((response: any) => response.tracks)
            );
    }

    getToken() {
        const body = new HttpParams().set('grant_type', 'client_credentials');

        return this.http.post('https://accounts.spotify.com/api/token', body.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic MTExZjY1NTI5NjdjNDQxMzk2ZjYyM2U4ZjVlZGY5ZmE6MmU4ZTQ5YmUwN2UxNDBmOTg1NDMzMzllNDU3ZjI4ZDg='
            }
        });
    }

}
