import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Tutorial } from 'src/app/tutorial/models/tutorial/tutorial.model';
import { TutorialService } from 'src/app/tutorial/services/tutorial/tutorial.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent<T extends Tutorial>{
  @Input() contents: T[] = [];
  @Input() pageSize = 5;
  @Input() currentPage = 1;
  @Input() totalPages = 0;
  @Output() contentsChange = new EventEmitter<T[]>();
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() currentPageChange = new EventEmitter<number>();
  pageSizes = [5, 10, 15, 20];
  lengthToArray: number[] = new Array(this.totalPages);

  constructor(private tutorialService: TutorialService) {
  }

  handleChangeCurrentPage(): void {
    this.currentPageChange.emit(this.currentPage);
  }

  handleChangePageSize(): void {
    this.pageSizeChange.emit(this.pageSize);
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
