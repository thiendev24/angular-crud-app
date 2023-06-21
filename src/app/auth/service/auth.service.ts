import { Injectable } from '@angular/core';
import { IAuthService } from './IAuth-service.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { User } from '../model/user/user';

const USER_URL = 'http://localhost:3000/users';
const options = {
  headers: new HttpHeaders({ contentType: 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {}

  signUp(user: User): Observable<any> {
    return this.http.post(USER_URL, user, options);
  }

  register(user: User): Observable<boolean> {
    let isRegister = false;
    this.http.post(USER_URL, user).subscribe({
      next: (res) => {
        console.log(res);
        isRegister = true;
      },
      error(err) {
        console.log(err);
        isRegister = false;
      },
    });

    return of(isRegister);
  }

  //  findUserByUsernameAndPassword(username: string, password: string): Observable<User> {
  //   let users:User[];
  //   let user: User;
  //    this.findAllUsers.subscribe({
  //     next: res=>{users = res ? res : []
  //       user =  users.find(u => {u.name === username && u.password === password})
  //     },
  //     error(err) {
  //       console.log(err);
  //       users = [];
  //     },
  //   });
  //   return of(user);
  // }

  findAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(USER_URL)
      .pipe(tap((_) => console.log('fetch data')));
  }
}
