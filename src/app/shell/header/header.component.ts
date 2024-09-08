import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  toggle = false;

  toggleSidebar(): void {
    let barOne = document.querySelector('.bar-1') as HTMLElement;
    let barTwo = document.querySelector('.bar-2') as HTMLElement;
    let barThree = document.querySelector('.bar-3') as HTMLElement;
    if (!this.toggle) {
      barTwo.style.visibility = 'hidden';
      barOne.style.transform = 'rotate(-40deg)';
      barOne.style.marginTop = '7px';
      barThree.style.transform = 'rotate(40deg)';
      barThree.style.marginTop = '-7px';
      this.toggle = true;
    } else {
      barOne.removeAttribute('style');
      barTwo.removeAttribute('style');
      barThree.removeAttribute('style');
      this.toggle = false;
    }
  }
}
