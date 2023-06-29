import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';
import { StoreModule } from '@ngrx/store';
import { courseReducer } from './store';

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    StoreModule.forFeature('course', courseReducer),
  ],
})
export class CourseModule {}
