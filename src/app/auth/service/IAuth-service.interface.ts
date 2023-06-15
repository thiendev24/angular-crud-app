import { Observable } from 'rxjs';
import { User } from '../model/user/user';

export abstract class IAuthService {
  public abstract register(user: User): Observable<any>;
}
