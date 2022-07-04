
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { element } from 'protractor';


export interface Data{
  id: number;
  name: string;
  lastname:string;
  years:number;
  gender:string;
  email:string;
  username : string;
  password:string;
  modified:number;
  count: number; 
  
  
}



const ITEMS_KEY = 'myDB';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _storage: Storage;
  
  constructor(private storage:Storage  ) { 

    this.init();

  }
  
  
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  getData(): Promise <Data[]> {
    return this.storage.get(ITEMS_KEY);
  }
 
  addData(data:Data):Promise<any>{
    return this.getData().then((d : Data[])=>{   
      if(d == null){
        data.count=-1; 
        data.username = this.generateUserName(data.name , data.lastname, data.id );
        return this.storage.set(ITEMS_KEY, [data]);  
      }else{
        const result = d.find(element => element.username == data.username || element.email == data.email)
        if(result == undefined){
          data.count=-1;       
          data.username = this.generateUserName(data.name , data.lastname, data.id );
          d.push(data);
          return this.storage.set(ITEMS_KEY, d);
        }              
      }
    });         
  }

  
  generateUserName(name : string , lastname : string, id : number ){
   let newString = String(id);
    let pass = name.slice(0,2 ).toUpperCase()+lastname.slice(-2).toLowerCase()+
    newString.slice(6)
    

    return pass;
     
  }

  
  changePassword(Currentpass : string , NewPass : string){
    return this.getData().then((d : Data[])=>{
      let A = d.findIndex(element => element.password === Currentpass)
      d[A].password = NewPass 
      return this.storage.set(ITEMS_KEY, d)
    });

  }

  changeUserName(email : string , Currentpass: string,username : string){
    return this.getData().then((d : Data[])=>{
      let result = d.find(element => element.email === email && element.password === Currentpass )
      if(result){
        let A = d.findIndex(element => element.email=== email )
        d[A].username = username 
        return this.storage.set(ITEMS_KEY, d)
      }   
    });

  }

  
  updateData(data:Data): Promise<any>{
    return this.getData().then((d : Data[])=>{
      if(!d || d.length == 0 ){
        return null;
      }
      let newdata: Data[] = [];
      for (let i of d){
        if(i.id === data.id){
          newdata.push(data);
          
        }else{
          newdata.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY , newdata) 
    });
  }

  deleteData(id : number): Promise<Data>{
   return this.getData().then((data : Data[])=>{
     if (!data || data.length === 0 ){
       return null;
     }
     let toKeep: Data[] = [];
     for(let i of data){
       if(i.id !== id ){
         toKeep.push(i);
       }
     }
     return this.storage.set(ITEMS_KEY, toKeep); 
   });


  }

  countPlus(input : string){
    this.getData().then((data : Data[])=>{
      let i = data.findIndex(element => element.username == input || element.email == input)
      data[i].count++;
      this.storage.set(ITEMS_KEY, data)
    })
  }
   
 


  
   
  
  

}
