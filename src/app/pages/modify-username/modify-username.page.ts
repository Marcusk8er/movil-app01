import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modify-username',
  templateUrl: './modify-username.page.html',
  styleUrls: ['./modify-username.page.scss'],
})
export class ModifyUsernamePage implements OnInit {

  constructor(private storageService : DataService) { }

  ngOnInit() {
  }


  user ={ 
    Email:'',
    Currentpass:'',
    Username:''
  }

  changeUsername(){
    this.storageService.changeUserName(this.user.Email, this.user.Currentpass , this.user.Username);
    
  }

}
