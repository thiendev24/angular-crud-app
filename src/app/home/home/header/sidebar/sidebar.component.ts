import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() isShowSidebar = false;
  @Output() isShowSidebarChange = new EventEmitter();

  toggleShowSidebar() {
    this.isShowSidebarChange.emit(!this.isShowSidebar);
  }
}
