import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  

  constructor (private router : Router){}

  isAuthenticated : boolean;

  canLoad(){
    
   // let isAuthenticated = !!(+localStorage.getItem('authenticated'));
    console.log(this.isAuthenticated)
    if(this.isAuthenticated){
      return true;
    }else{
      const navigation = this.router.getCurrentNavigation();
      

      let url = '/';
      if(navigation){
        url = navigation.extractedUrl.toString();
      } 

      console.log('got url: ',url);

      this.router.navigate(['/'], {queryParams: { returnto: url} } );
      return false;
    }

    
  }


}
