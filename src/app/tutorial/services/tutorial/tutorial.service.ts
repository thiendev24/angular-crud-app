import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ITutorialService } from './tutorial.interface';
import { Tutorial } from '../../models/tutorial/tutorial.model';

const TUTORIAL_API = 'http://localhost:3000/tutorials';

@Injectable({
  providedIn: 'root',
})
export class TutorialService implements ITutorialService {
  constructor(private http: HttpClient) {}

  findByTitle(title: string): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${TUTORIAL_API}?title=${title}`);
  }

  deleteTutorial(id: number): Observable<any> {
    return this.http.delete(`${TUTORIAL_API}/${id}`);
  }

  updateTutorial(id: number, data: Tutorial): Observable<any> {
    return this.http.put(`${TUTORIAL_API}/${id}`, data);
  }

  createNewTutorial(tutorial: Tutorial): Observable<boolean> {
    let isCreated: boolean = true;
    this.http.post(TUTORIAL_API, tutorial).subscribe({
      next: (res) => {
        console.log(res);
        isCreated = true;
      },
      error: (e) => {
        console.log(e);
        isCreated = false;
      },
    });

    return of(isCreated);
  }

  getTutorialById(id: number): Observable<Tutorial> {
    return this.http.get(`${TUTORIAL_API}/${id}`);
  }

  getAllTutorials(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(TUTORIAL_API);
  }
}
