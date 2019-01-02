import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url_api = 'https://reqres.in/api/';

  constructor(private http: HttpClient) { }

  getUserList() {
    const url_user = `${this.url_api}users?per_page=12&delay=1`;
    return this.http.get(url_user)
              .pipe(
                map(
                  response =>  response['data']
                )
              );
  }

  getUser(id: string) {
    const url_user = `${this.url_api}users/${id}?delay=1`;
    return this.http.get(url_user)
              .pipe(
                map(
                  response =>  response['data']
                )
              );
  }
}
