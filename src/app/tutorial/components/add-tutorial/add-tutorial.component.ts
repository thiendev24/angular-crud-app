import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../models/tutorial/tutorial.model';
import { TutorialService } from '../../services/tutorial/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
  providers: [TutorialService],
})
export class AddTutorialComponent implements OnInit {
  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {}

  tutorial: Tutorial = {
    title: '',
    description: '',
    isPublished: false,
  };

  isSubmitted = false;

  saveTutorial(): void {
    const data: Tutorial = {
      ...this.tutorial,
    };

    this.tutorialService
      .createNewTutorial(data)
      .subscribe((data) => (this.isSubmitted = data));
  }

  newTutorial() {
    this.isSubmitted = false;
    this.tutorial = {
      title: '',
      description: '',
      isPublished: false,
    };
  }
}
