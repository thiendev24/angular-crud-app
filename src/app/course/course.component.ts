import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Course } from './model';
import { getCourses } from './store';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses$ = new Observable<Course[]>();

  constructor(private store: Store) {
    // this.courses$ = this.store.dispatch(getCourses());
  }

  ngOnInit(): void {
    // console.log(this.courseItem$);
  }
}
