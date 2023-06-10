import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})
export class TutorialsListComponent implements OnInit {
  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex: number = -1;
  title: string = '';

  retrieveTutorials() {
    this.tutorialService.getAllTutorials().subscribe({
      next: (data) => {
        this.tutorials = data.length > 0 ? data : [];
        console.log(data);
      },
      error: (e) => console.log(e),
    });
  }

  refreshList() {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials() {
    this.tutorialService.deleteAllTutorials().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.log(e),
    });
  }

  searchByTitle() {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.tutorials = data.length > 0 ? data : [];
        console.log(data);
      },
      error: (e) => console.log(e),
    });
  }
}
