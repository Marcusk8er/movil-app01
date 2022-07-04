import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canLoad : [AuthGuard]
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
    
  },
  {
    path: 'tipos-er',
    loadChildren: () => import('./pages/tipos-er/tipos-er.module').then( m => m.TiposERPageModule),
    canLoad: [AuthGuard]
    
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
    canLoad : [AuthGuard]
  },
  {
    path: 'configuraciones',
    loadChildren: () => import('./pages/configuraciones/configuraciones.module').then( m => m.ConfiguracionesPageModule),
    canLoad : [AuthGuard]
  },
  {
    path: 'dbdata',
    loadChildren: () => import('./pages/dbdata/dbdata.module').then( m => m.DbdataPageModule), 
    canLoad : [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canLoad : [AuthGuard]
  },
  {
    path: 'modify-user',
    loadChildren: () => import('./pages/modify-user/modify-user.module').then( m => m.ModifyUserPageModule),
    canLoad : [AuthGuard]
  },
  {
    path: 'modify-username',
    loadChildren: () => import('./pages/modify-username/modify-username.module').then( m => m.ModifyUsernamePageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
