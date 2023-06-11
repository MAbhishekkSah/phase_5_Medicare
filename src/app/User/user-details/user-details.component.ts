import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserClass } from 'src/app/user-class';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService:UserServiceService, private activatedRoute:ActivatedRoute){}
  selectedUser!:UserClass;
  userId:any;
  ngOnInit() {
      this.userId = this.activatedRoute.snapshot.paramMap.get('id');
      this.userService.getUserById(this.userId).subscribe(response =>
        this.selectedUser = response);
  }
}
