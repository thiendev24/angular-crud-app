import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {APaginationService} from "./pagination.abstract-class";

@Injectable({
  providedIn: 'root'
})
export class PaginationService extends APaginationService {

  constructor(private http: HttpClient) {
    super();
  }

  getDataPaging(api: string, page: number, limit: number): Observable<any> {
    return this.http.get(`${api}?_page=${page}&limit=${limit}`);
  }
}
