import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanPackagesComponent } from './scan-packages.component';

const routes: Routes = [
  {
    path: '',
    component: ScanPackagesComponent,
    data: {
      title: 'Scan packages',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanPackagesRoutingModule {}
