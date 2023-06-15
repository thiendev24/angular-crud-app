import { Observable } from 'rxjs';
import { User } from '../model/user/user';
import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root',
// })
export interface IAuthService {
  register(user: User): Observable<any>;
}
