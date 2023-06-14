import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

@NgModule({
  declarations: [TutorialsListComponent],
  imports: [CommonModule, TutorialRoutingModule],
})
export class TutorialModule {}
