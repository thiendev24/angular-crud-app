import { Observable } from 'rxjs';
import { Tutorial } from '../../models/tutorial/tutorial.model';

export abstract class ATutorialService {
  public abstract getDataPaging(
    page: number,
    limit: number
  ): Observable<Tutorial[]>;

  public abstract findByTitle(title: string): Observable<Tutorial[]>;

  public abstract deleteTutorial(id: number): Observable<Tutorial>;

  public abstract updateTutorial(
    id: number,
    data: Tutorial
  ): Observable<Tutorial>;

  public abstract createNewTutorial(tutorial: Tutorial): Observable<boolean>;

  public abstract getTutorialById(id: number): Observable<Tutorial>;

  public abstract getAllTutorials(): Observable<Tutorial[]>;

  public abstract findTutorialById(id: number): Observable<Tutorial>;
}
