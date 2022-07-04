import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyUsernamePage } from './modify-username.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyUsernamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyUsernamePageRoutingModule {}
