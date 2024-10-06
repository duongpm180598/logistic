import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  Shell.childRoutes([
    {
      path: '',
      loadChildren: () =>
        import('./pages/pages.module').then((m) => m.PagesModule),
    },
    {
      path: 'scan-packages',
      loadChildren: () =>
        import('./scan-packages/scan-packages.module').then(
          (m) => m.ScanPackagesModule
        ),
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
