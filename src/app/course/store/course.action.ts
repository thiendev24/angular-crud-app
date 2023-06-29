import { createAction, props } from '@ngrx/store';
import { Course, CourseActionType } from '../model';

export const createCourse = createAction(
  CourseActionType.CREATE,
  props<Course>()
);

export const getCourses = createAction(CourseActionType.READ);
