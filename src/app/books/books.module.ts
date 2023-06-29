import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookEffect, bookReducer } from './store';
import { ABookService } from './service/book.abstract.service';
import { BookService } from './service';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksComponent, AddBookComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('myBooks', bookReducer),
    EffectsModule.forFeature([BookEffect]),
    FormsModule,
  ],
  providers: [{ provide: ABookService, useClass: BookService }],
})
export class BooksModule {}
