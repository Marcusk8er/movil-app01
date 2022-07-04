import { Component, OnInit , ViewChild } from '@angular/core';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { DataService , Data } from 'src/app/services/data.service';


@Component({
  selector: 'app-dbdata',
  templateUrl: './dbdata.page.html',
  styleUrls: ['./dbdata.page.scss'],
})
export class DbdataPage implements OnInit {

  data : Data[]=[];
  @ViewChild('myList')myList : IonList;
  
  constructor( private storageService :  DataService ,
    private plt : Platform, private toastController : ToastController ) { 

      this.plt.ready().then(()=>{ this.loadData() ; });

    }

  ngOnInit() {
  }

  loadData(){
    this.storageService.getData().then(data=> {
      this.data=data;
      
    });
  }

  updateData(data : Data){
    
    data.modified = Date.now();
    this.storageService.updateData(data).then(item=>{
      this.showToast('Update data');
      this.myList.closeSlidingItems();
      this.loadData();
    })

  }

  deleteData(data : Data){
    this.storageService.deleteData(data.id).then(item=>{
      this.showToast('Delete data');
      this.myList.closeSlidingItems();
      this.loadData();
    });

  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message : msg,
      duration : 2000

    });
    toast.present();

  }

}
