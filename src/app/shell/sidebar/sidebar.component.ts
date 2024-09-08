import { MENUS } from './../../@shared/menu';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menus = MENUS;

  toggleMenu(menu: any): void {
    menu.isOpen = !menu.isOpen;
  }
}
