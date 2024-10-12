import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  code: string = '';

  defaultOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
    navText: ['&#8249;', '&#8250;'],
  };
  serviceOptions = {
    ...this.defaultOptions,
    dots: true,
  };

  constructor(private router: Router) {}

  findPack(): void {
    console.log(this.code);
    if (!this.code) {
      return;
    }
    this.router.navigateByUrl(`/pack-info?code=${this.code}`);
  }
}
