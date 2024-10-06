import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './Servicios/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./Access/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Access/perfil/perfil.module').then(m => m.PerfilPageModule),
    //la implementacion de canActivate le indica a ionic que debe verificar el guard para poder redireccionar
    canActivate: [authGuard]
  },
  {
    path: 'controller',
    loadChildren: () => import('./Admin/controller/controller.module').then(m => m.ControllerPageModule)
  },
  //Pagina configurada con ** queda indicada como pagina de redireccionamiento en casos de error 
  {
    path: '**',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
