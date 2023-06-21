import {
  Component,
  DoCheck,
  KeyValueDiffer,
  KeyValueDiffers,
  OnInit,
} from '@angular/core';
import { Tutorial } from '../../models/tutorial/tutorial.model';
import { ATutorialService } from '../../services/tutorial/tutorial.abstract-class';

type Size = { value: number };

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})
export class TutorialsListComponent implements OnInit, DoCheck {
  showModal = false;
  currentPageSize: Size = { value: 5 };
  currentPage = 1;
  totalPages: number = 0;

  differ: KeyValueDiffer<string, number>;

  tutorials: Tutorial[] = [];
  currentTutorial: Tutorial = {};
  currentIndex: number = -1;
  title: string = '';

  constructor(
    private tutorialService: ATutorialService,
    private differService: KeyValueDiffers
  ) {
    this.differ = this.differService.find(this.currentPageSize).create();
    // this.totalPages = Math.ceil(this.tutorials.length / this.currentPageSize.value);
  }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  ngDoCheck(): void {
    if (this.differ) {
      const changes = this.differ.diff(this.currentPageSize);
      if (changes) {
        this.retrieveTutorials();
      }
    }
  }

  changePageSize(newSize: number) {
    this.currentPageSize.value = newSize;
  }

  retrieveTutorials() {
    this.tutorialService
      .getDataPaging(this.currentPage, this.currentPageSize.value)
      .subscribe({
        next: (data) => {
          this.tutorials = data.length > 0 ? data : [];
          this.totalPages = Math.ceil(
            this.tutorials.length / this.currentPageSize.value
          );
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
      },
      error: (e) => console.log(e),
    });
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
