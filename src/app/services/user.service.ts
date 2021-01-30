import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): any {       
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<any>(`${url}`, {  })
    .toPromise()
    .then(data => { return data; });
  }

  getUsuarios(): any {       
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<any>(`${url}`, {  });
  }
}
