import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  isShowMenu = false;
  @Input() isDarkMode = false;
  @Output() isDarkModeChange = new EventEmitter();

  toggleDarkMode() {
    this.isDarkModeChange.emit(!this.isDarkMode);
  }

  toggleShowMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
