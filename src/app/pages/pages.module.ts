import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [FaqComponent, HomeComponent, BlogComponent],
  imports: [CommonModule, CarouselModule, PagesRoutingModule],
})
export class PagesModule {}
