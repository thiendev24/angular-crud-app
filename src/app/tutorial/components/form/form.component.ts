import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TutorialService } from '../../services/tutorial/tutorial.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  title = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(7),
  ]);
  description = new FormControl('', [Validators.required]);

  frmTutorial: FormGroup = new FormGroup({
    title: this.title,
    description: this.description,
  });

  isSubmitted = false;

  constructor(
    private tutorialService: TutorialService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    // this.frmTutorial = this.formBuilder.group({
    //   title: [
    //     '',
    //     [Validators.required, Validators.minLength(3), Validators.maxLength(7)],
    //   ],
    //   description: ['', Validators.required],
    // });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.frmTutorial.controls;
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.frmTutorial.invalid) return;

    console.log(JSON.stringify(this.frmTutorial.value, null, 2));
  }

  onReset() {
    this.isSubmitted = false;
    this.frmTutorial.reset();
  }

  // tutorial: Tutorial = {};

  // onSubmit(frmTutorial: NgForm) {
  //   this.tutorialService
  //     .createNewTutorial(frmTutorial.value)
  //     .subscribe((data) => {
  //       console.log(data);
  //       this.isSubmitted = data;
  //     });

  //   this.isSubmitted ? frmTutorial.reset() : null;
  // }
}
