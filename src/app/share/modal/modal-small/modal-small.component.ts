import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-small',
  templateUrl: './modal-small.component.html',
  styleUrls: ['./modal-small.component.css'],
})
export class ModalSmallComponent {
  @Input() showModal = false;
  @Output() showModalChange = new EventEmitter<boolean>();

  toggleModal() {
    this.showModalChange.emit(!this.showModal);
  }
}
