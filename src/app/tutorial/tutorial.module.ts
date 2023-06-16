import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { ATutorialService } from './services/tutorial/tutorial.abstract-class';
import { TutorialService } from './services/tutorial/tutorial.service';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';

@NgModule({
  declarations: [
    TutorialsListComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: ATutorialService, useClass: TutorialService }],
})
export class TutorialModule {}
