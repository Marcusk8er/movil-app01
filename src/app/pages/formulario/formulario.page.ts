import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService , Data } from 'src/app/services/data.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  

  data : Data[]=[];
  newdata : Data = <Data>{};
  @ViewChild('myList')myList : IonList;

  constructor(private storageService : DataService , private plt: Platform , 
    private toasController: ToastController , ) {

      this.plt.ready().then(()=>{ this.loadData() ; });

  }

  loadData(){
    this.storageService.getData().then(data=> {
      this.data=data;
      
    });
  }


  addData(){
      this.newdata.id= Date.now();
      this.newdata.modified= Date.now();
      this.storageService.addData(this.newdata).then(d=>{
      this.newdata = <Data>{};
      if(d){
        this.showToast('! Successful ');
        this.loadData();
      }else{
        this.showToast('! Registered user');
      }
      
    });

    
    
  }


  async showToast(msg){
    const toast = await this.toasController.create({
      message : msg,
      duration : 2000

    });
    toast.present();

  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    
  }




}
