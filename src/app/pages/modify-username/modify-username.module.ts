import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyUsernamePageRoutingModule } from './modify-username-routing.module';

import { ModifyUsernamePage } from './modify-username.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyUsernamePageRoutingModule
  ],
  declarations: [ModifyUsernamePage]
})
export class ModifyUsernamePageModule {}
