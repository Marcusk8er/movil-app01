import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.page.html',
  styleUrls: ['./modify-user.page.scss'],
})
export class ModifyUserPage implements OnInit {

  constructor(private storageService : DataService , ) { }

  ngOnInit() {
  }
user ={ 
  Currentpass:'',
  NewPass:'',
  ConfirmPass:''

}

  changePassword(){

    if(this.user.NewPass === this.user.ConfirmPass){
      this.storageService.changePassword(this.user.Currentpass , this.user.NewPass);
    }
    
    
    

  }

}
