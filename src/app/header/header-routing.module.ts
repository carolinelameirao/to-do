import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderPage } from './header.page';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderPage,
    children: [
      {
        path: 'cadastrar',
        loadChildren: () => import('../cadastrar/cadastrar.module').then(m => m.CadastrarPageModule)
      },
      {
        path:'listar',
        loadChildren: () => import('../listar/listar.module').then(m => m.ListarPageModule)
      },
      {
        path:'pesquisar',
        loadChildren: () => import('../pesquisar/pesquisar.module').then(m => m.PesquisarPageModule)
      },
      {
        path: '',
        redirectTo:'/header/cadastrar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'/header/cadastrar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class HeaderPageRoutingModule {}
