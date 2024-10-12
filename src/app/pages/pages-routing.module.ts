import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PackInfoComponent } from './pack-info/pack-info.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'pack-info',
        component: PackInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
