import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = { 
    input:'',
    pass:''
  }

  loginUrl='';

  constructor(private auth : AuthenticationService, 
    private toasController: ToastController, private router : Router,
    private activatedRoute: ActivatedRoute  ) { }

  ngOnInit() {

    this.loginUrl = this.activatedRoute.snapshot.queryParamMap.get('returnto') || 'inicio'

  }

  
  
  login() {  
    this.auth.login( this.user.input, this.user.pass);
    this.router.navigateByUrl(this.loginUrl);
  }
  
  


  async showToast(msg){
    const toast = await this.toasController.create({
      message : msg,
      duration : 2000

    });
    toast.present();

  }
  






}
