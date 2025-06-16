import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'details/:name',
    loadChildren: () =>
      import('./pages/details/details.page').then((m) => m.DetailsPage),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./pages/favorites/favorites.page').then((m) => m.FavoritesPage),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
