import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCourseState = createFeatureSelector('course');

// export const selectCourses = createSelector(
//     selectCourseState,
// )
