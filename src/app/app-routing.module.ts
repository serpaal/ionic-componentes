import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./paginas/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./paginas/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./paginas/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./paginas/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./paginas/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./paginas/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./paginas/slide/slide.module').then( m => m.SlidePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
