import { CapturasModule } from './pages/capturas/capturas.module';
import { NotfoundComponent } from './_shared/layout/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './_shared/layout/layout/layout.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

const routes: Routes = [
  {
    path: 'auth',
    data: { breadcrumb: 'Auth' },
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    data: { breadcrumb: 'Home' },
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'capturas',
    data: { breadcrumb: 'Capturas' },
    loadChildren: () =>
      import('./pages/capturas/capturas.module').then((m) => m.CapturasModule),
  },


  //DEMOS
  {
    path: 'demo',
    component: LayoutComponent,
    children: [
      {
        path: 'uikit',
        data: { breadcrumb: 'UI Kit' },
        loadChildren: () =>
          import('./demo/components/uikit/uikit.module').then(
            (m) => m.UIkitModule
          ),
      },
      {
        path: 'utilities',
        data: { breadcrumb: 'Utilities' },
        loadChildren: () =>
          import('./demo/components/utilities/utilities.module').then(
            (m) => m.UtilitiesModule
          ),
      },
      {
        path: 'pages',
        data: { breadcrumb: 'Pages' },
        loadChildren: () =>
          import('./demo/components/pages/pages.module').then(
            (m) => m.PagesModule
          ),
      },
      {
        path: 'profile',
        data: { breadcrumb: 'User Management' },
        loadChildren: () =>
          import('./demo/components/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'documentation',
        data: { breadcrumb: 'Documentation' },
        loadChildren: () =>
          import('./demo/components/documentation/documentation.module').then(
            (m) => m.DocumentationModule
          ),
      },
      {
        path: 'blocks',
        data: { breadcrumb: 'Prime Blocks' },
        loadChildren: () =>
          import('./demo/components/primeblocks/primeblocks.module').then(
            (m) => m.PrimeBlocksModule
          ),
      },
      {
        path: 'ecommerce',
        data: { breadcrumb: 'E-Commerce' },
        loadChildren: () =>
          import('./demo/components/ecommerce/ecommerce.module').then(
            (m) => m.EcommerceModule
          ),
      },
      {
        path: 'apps',
        data: { breadcrumb: 'Apps' },
        loadChildren: () =>
          import('./demo/components/apps/apps.module').then(
            (m) => m.AppsModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '/404' },
  {
    path: '404',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
