import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/tic/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./pages/tic/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/tic/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/tic/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/tic/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./pages/tic/maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tic/reserves/reserves.module').then( m => m.ReservesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
