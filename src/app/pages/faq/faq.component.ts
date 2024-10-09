import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  faqSection: any = {
    section1: true,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  };

  toggleSection(section: string): void {
    this.faqSection[section] = !this.faqSection[section];
  }
}
