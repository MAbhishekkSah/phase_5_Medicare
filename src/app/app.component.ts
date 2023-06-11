import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { UserSingletonClass } from './user-singleton-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Medicare';

  constructor(private singletonUser:UserSingletonClass){}

  loggedUser:any;

  isAdminLoggedIn():string{
    if(UserSingletonClass.getInstance().logMap.has('Admin'))
    {
        this.loggedUser = UserSingletonClass.getInstance().logMap.get('Admin');
        return 'Y';
    }
    return 'N';
  }
  isUserLoggedIn():string{
    if(UserSingletonClass.getInstance().logMap.has('User'))
    {
        this.loggedUser = UserSingletonClass.getInstance().logMap.get('User');
        return 'Y';
    }
    return 'N';
  }


}
