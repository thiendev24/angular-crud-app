import { Observable, of } from 'rxjs';

export const handlerError = <T>(operation = 'operation', result?: T) => {
  return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
  };
};
