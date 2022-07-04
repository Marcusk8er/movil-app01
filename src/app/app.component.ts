import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
  constructor() {}

  

  componentes : Componente[] =[
    
    {
      icon:'earth-outline',
      name:'Renewable energy',
      redirecTo:'/tipos-er'
    },
    {
      icon: 'newspaper-outline', 
      name: 'News', 
      redirecTo: '/noticias'
    }, 
    {
      icon: 'cog-outline',
      name: 'configuration',
      redirecTo: '/configuraciones'
    },
    {
      icon: 'cloud-circle-outline',
      name: 'Data',
      redirecTo: '/dbdata'
    },
    {
      icon: 'person-outline',
      name: 'Profile',
      redirecTo: '/profile'
    },
    
  ]

  checkDarkTheme(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark);
    if(prefersDark.matches)
    {
      document.body.classList.toggle('dark');
    }
  };
  
  ngOnInit() {
    this.checkDarkTheme();
  }
  
  
}

