import { Injectable } from '@angular/core';
import { IAuthService } from './IAuth-service.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../model/user/user';

const USER_URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  constructor(private http: HttpClient) {}

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
}
