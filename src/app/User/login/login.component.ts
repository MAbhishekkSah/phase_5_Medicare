import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isSubmitted:boolean = false;
  constructor(private activatedRoute:ActivatedRoute, private userService:UserServiceService, 
              private _router:Router, private singletonUser:UserSingletonClass){}
  ngOnInit(): void {
  }
  user = {
    name:'',
    email:'',
    password:''
  }

  checkUser() :void{
    const tempUser ={
      name:this.user.name,
      email:this.user.email,
      password:this.user.password
    };
    console.log(tempUser);

    if(!tempUser.name)
    {
      alert("Please Provide your Name!");
      return;
    }
    if(!tempUser.email)
    {
      alert("Please Provide your Email Address!");
      return;
    }
    if(!tempUser.password)
    {
      alert("Please Enter password!");
      return;
    }

    if(this.user.name == 'Admin' && this.user.email == 'admin@medicare.com' && this.user.password == 'admin123')
    {
      alert('Welocome '+this.user.name +' !');
      UserSingletonClass.getInstance().logMap.set('Admin','Admin');
      this._router.navigate(['home']);
    }
    this.userService.getUserByEmail(this.user.email).subscribe((response) =>
    {
      if(response.email == this.user.email && response.password  == this.user.password)
      {
        alert("Welcome "+response.userName+" !");
        console.log("Hi Log");
        UserSingletonClass.getInstance().logMap.set('User',response.userName);
        console.log(UserSingletonClass.getInstance().logMap.get('User'));
        this._router.navigate(['home']);
      }
      else{
        alert("Email or Password is Wrong. Please try again!");
      }
    });
  }
}
