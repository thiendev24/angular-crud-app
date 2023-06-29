import { Action, createReducer, on } from '@ngrx/store';
import { Course } from '../model';
import { createCourse, getCourses } from './course.action';

const initialState: Course[] = [
  {
    id: 1,
    department: 'Computer Engineering',
    name: 'C++ Programming',
  },
];

export const courseReducer = createReducer(
  initialState,
  on(createCourse, (state: Course[], course: Course) => [...state, course]),
  on(getCourses, (state) => ({ ...state }))
);

export const reducer = (state: Course[], action: Action) => {
  return courseReducer(state, action);
};
