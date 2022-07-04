
import { Injectable } from '@angular/core';

import { DataService } from './data.service';

import { Data, Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  


  constructor(private storageService : DataService , private router : Router, 
    private authguard : AuthGuard ) { }

  

  login(input : string , pass : string) { 
    return this.storageService.getData().then((data : Data[])=>{  
      let result =  data.find(element => (element.username === input || element.email === input)  && element.password === pass) || false
      if(result){
        console.log(result);
        this.storageService.countPlus(input);  
        this.authguard.isAuthenticated = true;
      }else{
        console.log(result);
        this.authguard.isAuthenticated = false;
      }
  }); 
 } 

 logout(){
    this.authguard.isAuthenticated = false;
    this.router.navigateByUrl('/');
}



}
