import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalSmallComponent } from './modal/modal-small/modal-small.component';
import { PaginationComponent } from './pagination/pagination.component';
import { APaginationService } from './service/pagination.abstract-class';
import { PaginationService } from './service/pagination.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputComponent, ModalSmallComponent, PaginationComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  exports: [InputComponent, ModalSmallComponent, PaginationComponent],
  providers: [{ provide: APaginationService, useClass: PaginationService }],
})
export class ShareModule {}
