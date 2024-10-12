import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogComponent } from './blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PackInfoComponent } from './pack-info/pack-info.component';

@NgModule({
  declarations: [FaqComponent, HomeComponent, BlogComponent, PackInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    PagesRoutingModule,
  ],
})
export class PagesModule {}
