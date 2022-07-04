import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbdataPage } from './dbdata.page';

const routes: Routes = [
  {
    path: '',
    component: DbdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbdataPageRoutingModule {}
