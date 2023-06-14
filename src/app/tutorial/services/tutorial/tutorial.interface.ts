import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../../models/tutorial/tutorial.model';

// @Injectable()
export declare interface ITutorialService {
  findByTitle(title: string): Observable<Tutorial[]>;

  deleteTutorial(id: number): Observable<any>;

  updateTutorial(id: number, data: Tutorial): Observable<any>;

  createNewTutorial(tutorial: Tutorial): Observable<boolean>;

  getTutorialById(id: number): Observable<Tutorial>;

  getAllTutorials(): Observable<Tutorial[]>;
}
