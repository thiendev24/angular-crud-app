import { Component, OnInit } from '@angular/core';
import { APaginationService } from '../service/pagination.abstract-class';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent<T> implements OnInit {
  content: T[] = [];
  pageSize = 5;
  currentPage = 1;

  api = 'http://localhost:3000/tutorials';

  constructor(private paginationService: APaginationService) {}

  ngOnInit() {}

  handleChangeCurrentPage(page: number): void {
    this.currentPage = page;
  }

  handleChangePageSize(size: number): void {
    this.pageSize = size;
  }

  getDataPaging() {
    this.paginationService
      .getDataPaging(this.api, this.currentPage, this.pageSize)
      .subscribe({
        next: (res) => (this.content = res ? res : []),
        error: (e) => console.log(e),
      });
  }
}
