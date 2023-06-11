import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImportdataServiceService } from 'src/app/importdata-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { from } from 'rxjs';
import { Medicines } from 'src/app/medicines';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent implements OnInit {

  userForm!:FormGroup;
  constructor(private service:ImportdataServiceService, private _router:Router, private activatedRoute:ActivatedRoute,
                                       private builder:FormBuilder){}
  selectedId:any;
  currentMedicine!:Medicines;
  submitted:boolean = false;
  ngOnInit(): void {
      this.selectedId = this.activatedRoute.snapshot.paramMap.get('id');
      console.log("selected Id = "+this.selectedId);
      this.service.getMedicinesById(this.selectedId).subscribe(data =>
        this.currentMedicine = data);

        this.userForm  =this.builder.group({
          description:['',Validators.required],
          sellerName:['',Validators.required],
          category:['',Validators.required],
          price:['',Validators.required]
        });
  }

  get form()
  {
    return this.userForm.controls;
  }

  onSubmit()
  {
    this.submitted = true;
    if(this.userForm.invalid)
    {
      return;
    }
    else{
      this.service.updateMedicine(this.selectedId,this.currentMedicine).subscribe(data=>
        console.log(data)
        );
        alert("Data Updated Successfully!");
        this._router.navigate(['editItem']);
    }
  }
}
