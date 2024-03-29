import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ATutorialService } from '../../services/tutorial/tutorial.abstract-class';
import { Tutorial } from '../../models/tutorial/tutorial.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css'],
})
export class TutorialDetailsComponent implements OnInit {
  id: number;
  tutorial: Tutorial = {};

  title = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]);
  description = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(200),
  ]);

  constructor(
    private route: ActivatedRoute,
    private tutorialService: ATutorialService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // if (!this.viewMode) {
    //   this.message = '';
    //   this.getTutorial(this.route.snapshot.params['id']);
    // }

    this.tutorialService.findTutorialById(this.id).subscribe({
      next: (data) => {
        this.tutorial = data;
      },
      error: (e) => console.log(e),
    });
  }
  editTutorial = new FormGroup({
    description: this.description,
    title: this.title,
  });

  updateTutorial() {
    const tutorial: Tutorial = {
      id: this.id,
      title: this.editTutorial.value.title!,
      description: this.editTutorial.value.description!,
    };
    this.tutorialService.updateTutorial(this.id, tutorial).subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
    });
  }

  // @Input() viewMode = false;
  // @Input() currentTutorial: Tutorial = {};
  // message = '';

  // getTutorial(id: number) {
  //   this.tutorialService.getTutorialById(id).subscribe({
  //     next: (data) => {
  //       this.currentTutorial = data ? data : {};
  //       console.log(data);
  //     },
  //     error: (e) => console.log(e),
  //   });
  // }

  // updatePublished(status: boolean) {
  //   const data: Tutorial = {
  //     ...this.currentTutorial,
  //     isPublished: status,
  //   };

  //   this.message = '';

  //   this.tutorialService
  //     .updateTutorial(this.currentTutorial.id!, data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.currentTutorial.isPublished = status;
  //         this.message = res.message ? res.message : 'The status was updated!';
  //       },
  //       error: (e) => console.log(e),
  //     });
  // }

  // updateTutorial() {
  //   this.message = '';
  //   this.tutorialService
  //     .updateTutorial(this.currentTutorial.id!, this.currentTutorial)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.message = res.message
  //           ? res.message
  //           : 'This tutorial was updated successfully!';
  //       },
  //       error: (e) => console.log(e),
  //     });
  // }

  // deleteTutorial() {
  //   this.tutorialService.deleteTutorial(this.currentTutorial.id!).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.router.navigate(['/tutorials']);
  //     },
  //     error: (e) => console.log(e),
  //   });
  // }
}
