import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms';
import {  Router } from '@angular/router';
import { UserClass } from 'src/app/user-class';
import { UserServiceService } from 'src/app/user-service.service';
import { UserSingletonClass } from 'src/app/user-singleton-class';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private builder:FormBuilder, private service:UserServiceService,private _roter:Router){}
  userForm!:FormGroup;

  isSubmitted:boolean = false;
  ngOnInit(): void {
    console.log("Hi");
    this.userForm = new FormGroup({
      userName: new FormControl(''),
      contactNo: new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      address: new FormGroup({
        area:new FormControl(''),
        district:new FormControl(''),
        pinCode:new FormControl(''),
        state:new FormControl(''),
        country:new FormControl('')
      })
    })

      console.log("New User -> "+this.userForm.value.address);
  }
 
  onSubmit()
  {
    this.isSubmitted = true;
    this.service.addUser(this.userForm.value).subscribe(data =>
      console.log(data)
      );
      UserSingletonClass.getInstance().logMap.set('User',this.userForm.value.userName);
      this._roter.navigate(['home']);
  }
}
