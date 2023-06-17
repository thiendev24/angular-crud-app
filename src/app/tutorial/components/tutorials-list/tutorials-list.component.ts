import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Tutorial } from '../../models/tutorial/tutorial.model';
import { ATutorialService } from '../../services/tutorial/tutorial.abstract-class';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})
export class TutorialsListComponent implements OnInit {
  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  constructor(private tutorialService: ATutorialService) {}

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

  async confirmDelete(id: number) {
    await Swal.fire({
      title: 'Are you sure to delete this tutorial?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.tutorialService.deleteTutorial(id).subscribe({
          next: () =>
            Swal.fire('Deleted!', 'Your tutorial has been deleted.', 'success'),
          error: (e) => console.log(e),
        });
      }
    });
  }
}
