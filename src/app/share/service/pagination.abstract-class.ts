import {Observable} from "rxjs";

export abstract class APaginationService {
  abstract getDataPaging(api: string, page: number, limit: number): Observable<any>;
}
