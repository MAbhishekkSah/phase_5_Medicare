import { Component, OnInit } from '@angular/core';
import { UserClass } from 'src/app/user-class';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-track-user',
  templateUrl: './track-user.component.html',
  styleUrls: ['./track-user.component.css']
})
export class TrackUserComponent implements OnInit {

  constructor(private userService:UserServiceService){}
  usersList:UserClass[] = [];
  ngOnInit() {
      this.userService.getAllUsers().subscribe(response =>
        this.usersList = response
    );
  }
}
