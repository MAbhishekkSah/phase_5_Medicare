import { Component, OnInit } from '@angular/core';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(){}
  isLoggedIn:any;   
  ngOnInit(): void {
      if(UserSingletonClass.getInstance().logMap.has('User'))
      {
        UserSingletonClass.getInstance().logMap.delete('User');
        this.isLoggedIn = 'Y';
      }
      else if(UserSingletonClass.getInstance().logMap.has('Admin')){
        this.isLoggedIn = 'Y';
        UserSingletonClass.getInstance().logMap.delete('Admin');
      }
      else{
        this.isLoggedIn = 'N';
      }
      
  }
}
