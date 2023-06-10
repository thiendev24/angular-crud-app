import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
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
      title: this.tutorial.title,
      description: this.tutorial.description,
      isPublished: false,
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
